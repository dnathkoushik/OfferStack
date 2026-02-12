from fastapi import FastAPI
from app.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME, openapi_url=f"{settings.API_V1_STR}/openapi.json")

@app.get("/")
async def root():
    return {"message": "Welcome to PrepOS API"}

# Include routers here later
from app.api.v1.api import api_router
app.include_router(api_router, prefix=settings.API_V1_STR)
