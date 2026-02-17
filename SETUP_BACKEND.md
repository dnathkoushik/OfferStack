# Backend Setup Guide - offerStack (PrepOS)

## 🚀 Quick Setup (Choose One Option)

---

## ⭐ OPTION 1: Docker Setup (RECOMMENDED - Easiest)

### Step 1: Install Docker Desktop
1. Download Docker Desktop for Windows from: https://www.docker.com/products/docker-desktop/
2. Run the installer
3. Restart your computer when prompted
4. Open Docker Desktop and wait for it to start

### Step 2: Run Everything with One Command
Open PowerShell in the project directory and run:
```bash
docker-compose up --build
```

**That's it!** This will:
- ✅ Start PostgreSQL database
- ✅ Start Redis cache
- ✅ Build and run the FastAPI backend
- ✅ Run database migrations automatically

**Access your services:**
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs
- Frontend: http://localhost:3000

---

## 🐍 OPTION 2: Local Python Setup (More Control)

### Step 1: Install Python 3.11+
1. Download from: https://www.python.org/downloads/
2. **⚠️ CRITICAL**: Check "Add Python to PATH" during installation
3. Restart your terminal after installation
4. Verify installation:
   ```bash
   python --version
   ```

### Step 2: Install PostgreSQL
1. Download from: https://www.postgresql.org/download/windows/
2. During installation:
   - Remember the password you set for the `postgres` user
   - Keep the default port (5432)
3. After installation, create the database:
   ```bash
   # Open psql (PostgreSQL command line)
   psql -U postgres
   
   # Create database
   CREATE DATABASE prepos;
   
   # Exit
   \q
   ```

### Step 3: Create Environment File
In the `backend` folder, create a `.env` file:
```bash
cd backend
copy .env.example .env
```

Edit `.env` and update if needed:
```env
POSTGRES_SERVER=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password_here
POSTGRES_DB=prepos

REDIS_URL=redis://localhost:6379/0

DATABASE_URL=postgresql+asyncpg://postgres:your_password_here@localhost/prepos
```

### Step 4: Set Up Virtual Environment
```bash
cd backend
python -m venv venv
.\venv\Scripts\Activate
```

You should see `(venv)` in your terminal prompt.

### Step 5: Install Dependencies
```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Step 6: Run Database Migrations
```bash
# Generate initial migration (if not exists)
alembic revision --autogenerate -m "Initial tables"

# Apply migrations
alembic upgrade head
```

### Step 7: Start the Backend
```bash
uvicorn app.main:app --reload
```

**Access your backend:**
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

---

## 🧪 Verify Everything Works

### Test Backend API
Open your browser and go to:
- http://localhost:8000 - Should show: `{"message": "Welcome to PrepOS API"}`
- http://localhost:8000/docs - Interactive API documentation

### Test Frontend Connection
1. Make sure frontend is running: `npm run dev` (in frontend folder)
2. Go to http://localhost:3000
3. Try uploading a resume - it should now connect to the real backend!

---

## 🔧 Troubleshooting

### Python not found after installation
- Restart your terminal/PowerShell
- Restart your computer
- Check if Python is in PATH: `$env:Path -split ';' | Select-String python`

### PostgreSQL connection failed
- Make sure PostgreSQL service is running
- Check your password in `.env` file
- Verify database exists: `psql -U postgres -l`

### Port already in use
- Backend (8000): Stop any other process using port 8000
- PostgreSQL (5432): Make sure only one PostgreSQL instance is running
- Frontend (3000): Stop other Next.js apps

### Docker issues
- Make sure Docker Desktop is running
- Check Docker status: `docker ps`
- View logs: `docker-compose logs -f backend`

---

## 📝 Next Steps After Setup

Once your backend is running:

1. **Test Resume Upload**
   - Go to http://localhost:3000
   - Upload a PDF resume
   - Check the extracted skills

2. **Explore API Documentation**
   - Visit http://localhost:8000/docs
   - Try out different endpoints

3. **Check Database**
   - Connect to PostgreSQL
   - View created tables: `\dt` in psql

4. **Development Workflow**
   - Backend auto-reloads on code changes (with `--reload` flag)
   - Frontend auto-reloads with Next.js dev server
   - Check logs for any errors

---

## 🎯 Recommended: Use Docker

**Why Docker is better:**
- ✅ No manual database setup
- ✅ Consistent environment across all machines
- ✅ One command to start everything
- ✅ Easy to reset/rebuild
- ✅ Production-ready setup

**To switch to Docker later:**
1. Install Docker Desktop
2. Run `docker-compose down` (if anything is running)
3. Run `docker-compose up --build`
4. Done!

---

## 📚 Additional Resources

- FastAPI Documentation: https://fastapi.tiangolo.com/
- PostgreSQL Docs: https://www.postgresql.org/docs/
- Docker Docs: https://docs.docker.com/
- Alembic (Migrations): https://alembic.sqlalchemy.org/

---

**Need help?** Check the error messages carefully - they usually tell you exactly what's wrong!
