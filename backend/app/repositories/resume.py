
from sqlalchemy.ext.asyncio import AsyncSession
from app.repositories.base import BaseRepository
from app.models.resume import Resume
from app.schemas.resume import ResumeCreate, ResumeBase

class ResumeRepository(BaseRepository[Resume, ResumeCreate, ResumeBase]):
    async def create_with_user(self, db: AsyncSession, obj_in: ResumeCreate, user_id: int) -> Resume:
        obj_in_data = obj_in.model_dump()
        obj_in_data["user_id"] = user_id
        db_obj = self.model(**obj_in_data)
        db.add(db_obj)
        await db.commit()
        await db.refresh(db_obj)
        return db_obj

resume_repo = ResumeRepository(Resume)
