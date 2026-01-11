import "./App.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <h1 className="logo">NextGen Filmmakers</h1>
        <nav className="nav">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>
          La nouvelle génération <br /> du cinéma africain
        </h2>
        <p>
          Former  Créer  Inspirer
          </p>
        <button>Découvrir</button>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h3>À propos</h3>
        <p>
          NextGen Filmmakers est une communauté créative dédiée aux jeunes
          passionnés de cinéma, de vidéo et de storytelling visuel.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section dark">
        <h3>Nos projets</h3>
        <p>
          Courts-métrages, documentaires, formations, collaborations
          artistiques. Ici, les idées prennent vie.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <h3>Contact</h3>
        <p>
          Une idée ? Un projet ?  
          Écris-nous et faisons du bruit ensemble.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 NextGen Filmmakers — Tous droits réservés</p>
      </footer>
    </>
  );
}

export default App;
