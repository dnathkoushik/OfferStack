
from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
import os
from typing import Any
from app.schemas.resume import ResumeFileResponse, ExtractedData

router = APIRouter()

@router.post("/upload", response_model=ResumeFileResponse)
async def upload_resume(
    file: UploadFile = File(...),
) -> Any:
    """
    Upload a resume file and simulate extraction.
    """
    # Create uploads directory if not exists
    os.makedirs("uploads", exist_ok=True)
    
    file_location = f"uploads/{file.filename}"
    
    try:
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # Mock extraction logic
        extracted = ExtractedData(
            name="John Doe",
            email="john@example.com",
            skills=["Python", "FastAPI", "React", "Docker"]
        )
            
        return ResumeFileResponse(
            filename=file.filename,
            message="File uploaded and parsed successfully",
            extracted_data=extracted
        )
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Could not upload file: {e}")
