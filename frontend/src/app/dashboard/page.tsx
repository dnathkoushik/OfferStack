"use client";

import { useState } from "react";
import ResumeUpload from "@/components/ResumeUpload";

export default function Dashboard() {
    const [analysisResult, setAnalysisResult] = useState<any>(null);

    const handleAnalysisComplete = (data: any) => {
        setAnalysisResult(data);
    };

    return (
        <div className="container" style={{ padding: "var(--spacing-xl) var(--spacing-md)" }}>
            <h1 style={{ marginBottom: "var(--spacing-xl)" }}>Dashboard</h1>

            <div className="grid-responsive" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "var(--spacing-xl)" }}>

                <section>
                    <div className="card" style={{ height: '100%' }}>
                        <h2 style={{ marginBottom: "var(--spacing-lg)" }}>Resume Analysis</h2>
                        <ResumeUpload onAnalysisComplete={handleAnalysisComplete} />
                    </div>
                </section>

                <section>
                    <div className="card" style={{ height: '100%' }}>
                        <h2 style={{ marginBottom: "var(--spacing-lg)" }}>Identified Skill Gaps</h2>
                        <p style={{ marginBottom: "var(--spacing-md)" }}>Upload your resume to see skill gaps tailored to your target roles.</p>

                        {analysisResult ? (
                            <div style={{ marginTop: "var(--spacing-lg)" }}>
                                <div style={{
                                    padding: "var(--spacing-md)",
                                    backgroundColor: "rgba(37, 99, 235, 0.1)",
                                    borderRadius: "var(--radius-md)",
                                    marginBottom: "var(--spacing-md)"
                                }}>
                                    <strong>Analysis for:</strong> {analysisResult.extracted_data?.name || "Unknown Candidate"}
                                </div>

                                <h3 style={{ fontSize: "1.1rem", marginBottom: "var(--spacing-md)" }}>Skills Found:</h3>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--spacing-sm)" }}>
                                    {analysisResult.extracted_data?.skills?.map((skill: string, index: number) => (
                                        <span key={index} style={{
                                            padding: "4px 12px",
                                            backgroundColor: "var(--background)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "var(--radius-full)",
                                            fontSize: "0.875rem"
                                        }}>
                                            ✅ {skill}
                                        </span>
                                    ))}
                                </div>

                                <div style={{
                                    marginTop: "var(--spacing-lg)",
                                    padding: "var(--spacing-md)",
                                    backgroundColor: "rgba(245, 158, 11, 0.1)",
                                    border: "1px solid rgba(245, 158, 11, 0.2)",
                                    borderRadius: "var(--radius-md)",
                                    color: "#92400e"
                                }}>
                                    <strong>Recommendation:</strong> Based on these skills, you should focus on Advanced Backend patterns.
                                </div>
                            </div>
                        ) : (
                            <div style={{
                                padding: "var(--spacing-2xl)",
                                textAlign: "center",
                                color: "var(--text-muted)",
                                border: "2px dashed var(--border)",
                                borderRadius: "var(--radius-md)",
                                marginTop: "var(--spacing-md)"
                            }}>
                                <em>No analysis yet. Upload a resume to begin.</em>
                            </div>
                        )}
                    </div>
                </section>

                <section style={{ gridColumn: "1 / -1" }}>
                    <div className="card">
                        <h2 style={{ marginBottom: "var(--spacing-lg)" }}>Your Learning Roadmap</h2>
                        <div className="grid-responsive" style={{ gap: "var(--spacing-md)" }}>
                            {["REST API Basics", "Database Design", "Docker Deployment"].map((step, i) => (
                                <div key={i} style={{
                                    padding: "var(--spacing-lg)",
                                    backgroundColor: "var(--background)",
                                    borderRadius: "var(--radius-md)",
                                    borderLeft: "4px solid var(--primary)"
                                }}>
                                    <h3 style={{ fontSize: "1.1rem", marginBottom: "var(--spacing-xs)" }}>Step {i + 1}</h3>
                                    <p style={{ margin: 0 }}>{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
