from fastapi import APIRouter
from app.api.v1.endpoints import resume, login

api_router = APIRouter()
api_router.include_router(login.router, tags=["login"])
api_router.include_router(resume.router, prefix="/resumes", tags=["resumes"])
