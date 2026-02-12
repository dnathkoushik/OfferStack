from pydantic import BaseModel
from typing import Optional

class ResumeBase(BaseModel):
    file_path: str
    parsed_text: Optional[str] = None

class ResumeCreate(ResumeBase):
    pass

class Resume(ResumeBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True
