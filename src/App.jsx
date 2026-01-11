import "./App.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo-block">
          <div className="logo">NEXTGEN FILMMAKERS</div>
          <div className="slogan">Façonner l'avenir du cinéma, une vision à la fois</div>
          </div>
        <nav className="nav">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="why-section">
  <h2>Pourquoi collaborer avec nous ?</h2>

  <div className="why-grid">
    <div className="why-card">
      <h3>Vision claire</h3>
      <p>
        Nous développons des projets cinématographiques structurés,
        portés par une vision africaine moderne et exportable.
      </p>
    </div>

    <div className="why-card">
      <h3>Écosystème professionnel</h3>
      <p>
        Une organisation digitale solide : administration, partenaires,
        sponsors, contenus et médias centralisés.
      </p>
    </div>

    <div className="why-card">
      <h3>Impact & visibilité</h3>
      <p>
        Chaque collaboration est pensée pour offrir visibilité,
        crédibilité et retour d’image à long terme.
      </p>
    </div>
  </div>
</section>

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
