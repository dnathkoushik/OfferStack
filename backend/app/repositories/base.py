from typing import Any, Generic, List, Optional, Type, TypeVar, Union
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.db.base_class import Base

# Generic type variables
Entity = TypeVar("Entity", bound=Base)
CreateSchema = TypeVar("CreateSchema", bound=BaseModel)
UpdateSchema = TypeVar("UpdateSchema", bound=BaseModel)


class AsyncRepository(Generic[Entity, CreateSchema, UpdateSchema]):
    """
    Generic async repository providing basic CRUD operations.
    """

    def __init__(self, entity_model: Type[Entity]):
        self._entity = entity_model

    async def fetch_by_id(self, session: AsyncSession, obj_id: Any) -> Optional[Entity]:
        query = select(self._entity).where(self._entity.id == obj_id)
        result = await session.execute(query)
        return result.scalars().first()

    async def fetch_all(
        self, session: AsyncSession, offset: int = 0, max_results: int = 100
    ) -> List[Entity]:
        query = select(self._entity).offset(offset).limit(max_results)
        result = await session.execute(query)
        return result.scalars().all()

    async def insert(self, session: AsyncSession, data: CreateSchema) -> Entity:
        values = data.model_dump()
        instance = self._entity(**values)

        session.add(instance)
        await session.commit()
        await session.refresh(instance)

        return instance

    async def modify(
        self,
        session: AsyncSession,
        instance: Entity,
        updates: Union[UpdateSchema, dict],
    ) -> Entity:
        if isinstance(updates, BaseModel):
            update_fields = updates.model_dump(exclude_unset=True)
        else:
            update_fields = updates

        for attr, value in update_fields.items():
            if hasattr(instance, attr):
                setattr(instance, attr, value)

        session.add(instance)
        await session.commit()
        await session.refresh(instance)

        return instance

    async def delete(self, session: AsyncSession, obj_id: Any) -> Optional[Entity]:
        query = select(self._entity).where(self._entity.id == obj_id)
        result = await session.execute(query)
        instance = result.scalars().first()

        if instance:
            await session.delete(instance)
            await session.commit()

        return instance