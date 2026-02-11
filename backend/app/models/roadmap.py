from sqlalchemy import Column, Integer, String, Text, ForeignKey, DateTime, Boolean, func, Enum
from sqlalchemy.orm import relationship
from app.db.base_class import Base
import enum

class RoadmapStatus(str, enum.Enum):
    ACTIVE = "active"
    COMPLETED = "completed"
    ARCHIVED = "archived"

class RoadmapTaskStatus(str, enum.Enum):
    PENDING = "pending"
    IN_PROGRESS = "in_progress"
    DONE = "done"

class Roadmap(Base):
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.id"), index=True)
    target_role = Column(String, nullable=False)
    generated_at = Column(DateTime(timezone=True), server_default=func.now())
    status = Column(Enum(RoadmapStatus), default=RoadmapStatus.ACTIVE)

    user = relationship("User", back_populates="roadmaps")
    tasks = relationship("RoadmapTask", back_populates="roadmap", cascade="all, delete-orphan")

class RoadmapTask(Base):
    id = Column(Integer, primary_key=True, index=True)
    roadmap_id = Column(Integer, ForeignKey("roadmap.id"), index=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    resource_url = Column(String, nullable=True)
    status = Column(Enum(RoadmapTaskStatus), default=RoadmapTaskStatus.PENDING)
    order_index = Column(Integer, default=0)

    roadmap = relationship("Roadmap", back_populates="tasks")
    progress_logs = relationship("ProgressLog", back_populates="task")
