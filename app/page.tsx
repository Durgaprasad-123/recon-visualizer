import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        color: "#00ffea",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        🔥 Recon Visualizer 🔥
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Your ultimate cyber reconnaissance dashboard
      </p>

      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <Link
              href="/results"
              style={{
                textDecoration: "none",
                color: "#00ffea",
                fontSize: "1.5rem",
                border: "2px solid #00ffea",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                transition: "0.3s",
              }}
            >
              View Results
            </Link>
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <Link
              href="/dashboard"
              style={{
                textDecoration: "none",
                color: "#ff00ff",
                fontSize: "1.5rem",
                border: "2px solid #ff00ff",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                transition: "0.3s",
              }}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage:
            "url('/cyber-bg.jpg')", // optional: dark hacker-themed background image
          backgroundSize: "cover",
          opacity: 0.2,
        }}
      />
    </div>
  );
}
