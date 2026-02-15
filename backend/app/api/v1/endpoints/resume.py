
from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
import shutil
import os
from typing import Any
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.resume import ResumeFileResponse, ExtractedData, ResumeCreate
from app.services.resume_parser import ResumeParserService
from app.repositories.resume import resume_repo
from app.api.deps import get_db

router = APIRouter()

@router.post("/upload", response_model=ResumeFileResponse)
async def upload_resume(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db)
) -> Any:
    """
    Upload a resume file, extract text, and save to database.
    """
    # Create uploads directory if not exists
    os.makedirs("uploads", exist_ok=True)
    
    file_location = f"uploads/{file.filename}"
    
    try:
        # Save file to disk
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
            
        # Extract Text and Data
        text = ResumeParserService.extract_text(file_location)
        extracted = ResumeParserService.extract_data(text)
        
        # Create Resume Record in DB
        # Mock User ID for now (assuming user with ID 1 exists)
        # TODO: Replace with current_user dependency when auth is ready
        user_id = 1 
        
        resume_in = ResumeCreate(file_path=file_location, parsed_text=text)
        await resume_repo.create_with_user(db=db, obj_in=resume_in, user_id=user_id)
            
        return ResumeFileResponse(
            filename=file.filename,
            message="File uploaded and parsed successfully",
            extracted_data=extracted
        )
            
    except Exception as e:
        print(f"Error processing resume: {e}")
        raise HTTPException(status_code=500, detail=f"Could not upload/parse file: {str(e)}")
