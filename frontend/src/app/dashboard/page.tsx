import ResumeUpload from "@/components/ResumeUpload";

export default function Dashboard() {
    return (
        <div style={{ padding: "40px" }}>
            <h1>Dashboard</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

                <section>
                    <h2>Internship Prep - Resume Analysis</h2>
                    <ResumeUpload />
                </section>

                <section style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
                    <h2>Identified Skill Gaps</h2>
                    <p>Upload your resume to see skill gaps tailored to your target roles.</p>
                    {/* Mock data display for now */}
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {/* Example item */}
                        {/* <li style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#f9f9f9" }}>
              <strong>Python Backend:</strong> You need more practice with FastAPI.
            </li> */}
                    </ul>
                </section>

                <section style={{ gridColumn: "span 2", border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
                    <h2>Your Learning Roadmap</h2>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <div style={{ flex: 1, padding: "10px", background: "#eee" }}>Step 1: REST API Basics</div>
                        <div style={{ flex: 1, padding: "10px", background: "#eee" }}>Step 2: Database Design</div>
                        <div style={{ flex: 1, padding: "10px", background: "#eee" }}>Step 3: Docker Deployment</div>
                    </div>
                </section>
            </div>
        </div>
    );
}
