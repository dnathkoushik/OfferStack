from sqlalchemy import Column, Integer, String, Text, ForeignKey, Float
from sqlalchemy.orm import relationship
from app.db.base_class import Base

class Company(Base):
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    description = Column(Text, nullable=True)
    website = Column(String, nullable=True)

    requirements = relationship("CompanySkillRequirement", back_populates="company")

class CompanySkillRequirement(Base):
    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("company.id"), index=True)
    skill_id = Column(Integer, ForeignKey("skill.id"), index=True)
    role_title = Column(String, nullable=False) # e.g. "Software Engineer"
    proficiency_level = Column(Float, default=1.0) # Scale matches UserSkillScore

    company = relationship("Company", back_populates="requirements")
    skill = relationship("Skill", back_populates="company_requirements")
