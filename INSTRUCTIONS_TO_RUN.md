# PrepOS - Running Instructions

## Current Status
- **Frontend**: Running at http://localhost:3000
- **Backend**: Not running (Requires Python or Docker)

## Prerequisites Missing
Your system currently lacks the necessary tools to run the backend:
1. **Python 3.10+**: Required for the FastAPI backend.
2. **Docker**: Strongly updated for a production-ready environment (Postgres + Redis).

## How to Install Prerequisites

### Option 1: Docker (Recommended)
1. Download and install **Docker Desktop for Windows**.
2. Restart your terminal (or computer).
3. Run the full stack with one command:
   ```bash
   docker-compose up --build
   ```

### Option 2: Local Python Setup
1. Download Python 3.11 from python.org.
   - **IMPORTANT**: Check "Add Python to PATH" during installation.
2. Install PostgreSQL locally and create a database named `prepos`.
3. Create a virtual environment in `backend/`:
   ```bash
   cd backend
   python -m venv venv
   .\venv\Scripts\Activate
   pip install -r requirements.txt
   ```
4. Run the backend:
   ```bash
   uvicorn app.main:app --reload
   ```

### Database Migrations (New)
After setting up the database, you must run migrations to create the tables:
1. Ensure your virtual environment is active.
2. Generate the first migration (if not done):
   ```bash
   alembic revision --autogenerate -m "Initial tables"
   ```
3. Apply migrations:
   ```bash
   alembic upgrade head
   ```

## Using the Application Now
You can interact with the **Frontend** immediately at [http://localhost:3000](http://localhost:3000).
- Navigate to the **Dashboard**.
- Use the **Resume Upload** button (Mock API is enabled for demo).
