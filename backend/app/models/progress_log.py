from sqlalchemy import Column, Integer, ForeignKey, DateTime, func, Text
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class ProgressLog(Base):
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.id"), index=True)
    task_id = Column(Integer, ForeignKey("roadmaptask.id"), index=True)
    completed_at = Column(DateTime(timezone=True), server_default=func.now())
    notes = Column(Text, nullable=True)

    user = relationship("User", back_populates="progress_logs")
    task = relationship("RoadmapTask", back_populates="progress_logs")
