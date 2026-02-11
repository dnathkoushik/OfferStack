from sqlalchemy import Column, Integer, ForeignKey, Float, Enum
from sqlalchemy.orm import relationship
from app.db.base_class import Base
import enum

class SkillSource(str, enum.Enum):
    RESUME = "resume"
    ASSESSMENT = "assessment"
    MANUAL = "manual"

class UserSkillScore(Base):
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("user.id"), index=True)
    skill_id = Column(Integer, ForeignKey("skill.id"), index=True)
    score = Column(Float, default=0.0) # 0 to 1 or 0 to 100
    source = Column(Enum(SkillSource), default=SkillSource.RESUME)

    user = relationship("User", back_populates="skill_scores")
    skill = relationship("Skill", back_populates="user_scores")
