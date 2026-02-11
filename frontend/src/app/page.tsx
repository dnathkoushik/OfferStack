import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to PrepOS</h1>
      <p style={{ marginTop: "20px", fontSize: "1.2rem" }}>
        Your intelligent internship preparation system.
      </p>

      <div style={{ marginTop: "40px" }}>
        <Link
          href="/dashboard"
          style={{
            padding: "15px 30px",
            background: "#0070f3",
            color: "white",
            borderRadius: "5px",
            fontSize: "1.1rem"
          }}
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
