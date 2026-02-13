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
    <div className="card" style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: 'var(--spacing-md)' }}>Upload Resume</h2>
      <p style={{ marginBottom: 'var(--spacing-lg)' }}>Select your resume (PDF) to start the analysis.</p>

      <div style={{
        border: '2px dashed var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: 'var(--spacing-xl)',
        marginBottom: 'var(--spacing-lg)',
        backgroundColor: 'var(--background)'
      }}>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ width: '100%' }}
        />
      </div>

      <button
        className={`btn btn-primary ${uploading ? 'disabled' : ''}`}
        onClick={handleUpload}
        disabled={!file || uploading}
        style={{ width: '100%', opacity: uploading ? 0.7 : 1 }}
      >
        {uploading ? (
          <>
            <span style={{ marginRight: '8px' }}>⏳</span> Analyzing...
          </>
        ) : "Analyze Resume"}
      </button>
    </div>
  );
}
