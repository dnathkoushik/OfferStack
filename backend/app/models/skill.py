from sqlalchemy import Column, Integer, String, Index
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Skill(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    # Normalized name for better matching (e.g. "Python" vs "python")
    normalized_name = Column(String, unique=True, index=True, nullable=False)
    category = Column(String, nullable=True)

    user_scores = relationship("UserSkillScore", back_populates="skill")
    company_requirements = relationship("CompanySkillRequirement", back_populates="skill")
