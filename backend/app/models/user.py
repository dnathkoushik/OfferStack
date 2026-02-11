from sqlalchemy import Boolean, Column, Integer, String, Enum, DateTime, func
from sqlalchemy.orm import relationship
from app.db.base_class import Base
import enum

class UserRole(str, enum.Enum):
    ADMIN = "admin"
    STUDENT = "student"

class User(Base):
    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(Enum(UserRole), default=UserRole.STUDENT)
    is_active = Column(Boolean(), default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    resumes = relationship("Resume", back_populates="owner")
    skill_scores = relationship("UserSkillScore", back_populates="user")
    roadmaps = relationship("Roadmap", back_populates="user")
    progress_logs = relationship("ProgressLog", back_populates="user")
