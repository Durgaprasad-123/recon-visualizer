import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "#00ffea",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Courier New', monospace",
        textAlign: "center",
        overflow: "hidden",
        padding: "2rem",
        position: "relative",
      }}
    >
      {/* Hacker glow effect */}
      <h1
        style={{
          fontSize: "4rem",
          marginBottom: "1rem",
          textShadow: "0 0 10px #00ffea, 0 0 20px #00ffea, 0 0 40px #00ffea",
        }}
      >
        🔥 Recon Visualizer 🔥
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          marginBottom: "2rem",
          color: "#0ff",
          textShadow: "0 0 5px #0ff",
        }}
      >
        Your ultimate cyber reconnaissance dashboard
      </p>

      <nav>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", gap: "1rem" }}>
          <li>
            <Link
              href="/upload"
              style={{
                textDecoration: "none",
                color: "#00ffea",
                fontSize: "1.2rem",
                border: "2px solid #00ffea",
                padding: "0.7rem 1.5rem",
                borderRadius: "10px",
                transition: "0.3s",
                boxShadow: "0 0 10px #00ffea, 0 0 20px #00ffea",
              }}
            >
              Upload
            </Link>
          </li>
          <li>
            <Link
              href="/results"
              style={{
                textDecoration: "none",
                color: "#ff00ff",
                fontSize: "1.2rem",
                border: "2px solid #ff00ff",
                padding: "0.7rem 1.5rem",
                borderRadius: "10px",
                transition: "0.3s",
                boxShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff",
              }}
            >
              View Results
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              style={{
                textDecoration: "none",
                color: "#ffff00",
                fontSize: "1.2rem",
                border: "2px solid #ffff00",
                padding: "0.7rem 1.5rem",
                borderRadius: "10px",
                transition: "0.3s",
                boxShadow: "0 0 10px #ffff00, 0 0 20px #ffff00",
              }}
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* Background animation using uploaded image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: "url('/cyber-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          filter: "blur(2px)",
        }}
      />

      {/* Animated neon lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "-50%",
          width: "200%",
          height: "100%",
          background: "linear-gradient(120deg, #00ffea 0%, #ff00ff 50%, #ffff00 100%)",
          opacity: 0.05,
          transform: "skewY(-10deg)",
          animation: "moveBg 10s linear infinite",
        }}
      />

      <style>
        {`
          @keyframes moveBg {
            0% { transform: translateX(-100%) skewY(-10deg); }
            100% { transform: translateX(100%) skewY(-10deg); }
          }
        `}
      </style>
    </div>
  );
}
