"use client";

import { useState } from "react";

export default function ResumeUpload() {
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
    
    // Mock upload
    const formData = new FormData();
    formData.append("file", file);

    try {
      // await fetch("/api/upload", { method: "POST", body: formData });
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock delay
      alert("Resume uploaded successfully!");
    } catch (error) {
      console.error(error);
      alert("Upload failed.");
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
        {uploading ? "Uploading..." : "Analyze Resume"}
      </button>
    </div>
  );
}
