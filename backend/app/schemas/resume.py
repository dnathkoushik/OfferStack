
from pydantic import BaseModel
from typing import Optional, List

class ResumeBase(BaseModel):
    file_path: str
    parsed_text: Optional[str] = None

class ResumeCreate(ResumeBase):
    pass

class ExtractedData(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    skills: List[str] = []

class ResumeFileResponse(BaseModel):
    filename: str
    message: str
    extracted_data: Optional[ExtractedData] = None

class Resume(ResumeBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
