import { useState } from "react";
import ResumeUpload from "@/components/ResumeUpload";

export default function Dashboard() {
    const [analysisResult, setAnalysisResult] = useState<any>(null);

    const handleAnalysisComplete = (data: any) => {
        setAnalysisResult(data);
    };

    return (
        <div style={{ padding: "40px" }}>
            <h1>Dashboard</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

                <section>
                    <h2>Internship Prep - Resume Analysis</h2>
                    <ResumeUpload onAnalysisComplete={handleAnalysisComplete} />
                </section>

                <section style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
                    <h2>Identified Skill Gaps</h2>
                    <p>Upload your resume to see skill gaps tailored to your target roles.</p>

                    {analysisResult ? (
                        <div>
                            <p><strong>Analysis for:</strong> {analysisResult.extracted_data?.name}</p>
                            <h3>Skills Found:</h3>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                                {analysisResult.extracted_data?.skills?.map((skill: string, index: number) => (
                                    <li key={index} style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#eef" }}>
                                        ✅ {skill}
                                    </li>
                                ))}
                            </ul>
                            <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#fff3cd", border: "1px solid #ffeeba" }}>
                                <strong>Recommendation:</strong> Based on these skills, you should focus on Advanced Backend patterns.
                            </div>
                        </div>
                    ) : (
                        <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
                            <em>No analysis yet. Upload a resume to begin.</em>
                        </div>
                    )}
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
