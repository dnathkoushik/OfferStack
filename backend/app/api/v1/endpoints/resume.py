from fastapi import APIRouter, UploadFile, File, HTTPException
import shutil
import os
from typing import Any
from app.schemas.resume import Resume
# from app import crud, models
# from app.api import deps
from sqlalchemy.orm import Session
# from app.db.session import SessionLocal

router = APIRouter()

@router.post("/upload", response_model=Any)
async def upload_resume(
    file: UploadFile = File(...),
) -> Any:
    """
    Upload a resume file.
    """
    # Create uploads directory if not exists
    os.makedirs("uploads", exist_ok=True)
    
    file_location = f"uploads/{file.filename}"
    
    try:
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Could not upload file: {e}")
        
    return {"filename": file.filename, "location": file_location, "message": "File uploaded successfully"}
