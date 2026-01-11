import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="logo-block">
          <h1 className="logo">NEXTGEN FILMMAKERS</h1>
          <p className="slogan">
            Façonner l'avenir du cinéma, une vision à la fois
          </p>
        </div>
      </header>

      {/* MAIN */}
      <main className="main">
        <section className="partners-section">
          <h2>Ils nous font confiance</h2>

          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-logo">LOGO</div>
              <p className="partner-name">Sponsor 1</p>
            </div>

            <div className="partner-card">
              <div className="partner-logo">LOGO</div>
              <p className="partner-name">Sponsor 2</p>
            </div>

            <div className="partner-card">
              <div className="partner-logo">LOGO</div>
              <p className="partner-name">Partenaire 1</p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} NEXTGEN FILMMAKERS — Tous droits réservés
      </footer>
    </div>
  );
}
