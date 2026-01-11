function App() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0a0a0a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>
        🎬 NextGen Filmmakers
      </h1>

      <p style={{ maxWidth: "600px", fontSize: "1.1rem", opacity: 0.85 }}>
        Une nouvelle génération de créateurs.
        Des histoires puissantes.
        Des films qui marquent leur époque.
      </p>

      <button style={{
        marginTop: "30px",
        padding: "12px 24px",
        fontSize: "1rem",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        backgroundColor: "#e50914",
        color: "white"
      }}>
        Rejoindre le mouvement
      </button>
    </div>
  );
}

export default App;
