
import re
from pypdf import PdfReader
from typing import List, Optional
from app.schemas.resume import ExtractedData

class ResumeParserService:
    @staticmethod
    def extract_text(file_path: str) -> str:
        """
        Extract raw text from a PDF file.
        """
        try:
            reader = PdfReader(file_path)
            text = ""
            for page in reader.pages:
                text += page.extract_text() or ""
            return text
        except Exception as e:
            print(f"Error extracting text from PDF: {e}")
            return ""

    @staticmethod
    def extract_data(text: str) -> ExtractedData:
        """
        Extract structured data from resume text using regex or simple logic.
        (This will be replaced by LLM-based extraction later)
        """
        
        # Simple extraction logic for demo purposes
        email_pattern = r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        email_match = re.search(email_pattern, text)
        email = email_match.group(0) if email_match else None
        
        # Mock name extraction (taking first line or similar logic is unreliable, so let's stick to a mock for now if not found)
        # Ideally, we'd use NER here.
        name = "Candidate Name" 
        
        # Simple keyword matching for skills
        common_skills = ["Python", "JavaScript", "React", "Node.js", "SQL", "Docker", "AWS", "FastAPI", "TypeScript", "Java", "C++"]
        found_skills = [skill for skill in common_skills if re.search(r'\b' + re.escape(skill) + r'\b', text, re.IGNORECASE)]
        
        if not found_skills:
             # Fallback if no skills found
            found_skills = []

        return ExtractedData(
            name=name,
            email=email,
            skills=found_skills
        )
