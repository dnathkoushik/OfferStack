from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

from app.core.config import settings

engine = create_async_engine(settings.assemble_db_url(), echo=True)
SessionLocal = sessionmaker(engine, expire_on_commit=False, class_=AsyncSession)
