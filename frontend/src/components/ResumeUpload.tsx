"use client";

import { useState } from "react";

export default function ResumeUpload({ onAnalysisComplete }: { onAnalysisComplete?: (data: any) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // Use the local Next.js API route (which mocks the backend)
      const response = await fetch("/api/resumes/upload", { method: "POST", body: formData });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const data = await response.json();
      console.log("Upload success:", data);

      // Pass data to parent
      if (onAnalysisComplete) {
        onAnalysisComplete(data);
      }

      alert("Resume uploaded successfully: " + data.filename);
    } catch (error) {
      console.error(error);
      alert("Upload failed. Make sure the backend is running or mock mode is enabled.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-container" style={{ padding: "20px", border: "1px dashed #ccc", borderRadius: "8px" }}>
      <h2>Upload Resume</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: uploading ? "#ccc" : "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: uploading ? "not-allowed" : "pointer"
        }}
      >
        {uploading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </div>
  );
}
