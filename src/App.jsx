import "./App.css";

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo-block">
          <h1 className="logo">NEXTGEN FILMMAKERS</h1>
          <span className="slogan">
            Façonner l’avenir du cinéma, une vision à la fois.
          </span>
        </div>

        <nav className="nav">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#partners">Partenaires</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>
          Le futur du cinéma
          <br />
          commence maintenant
        </h2>

        <p>
          NEXTGEN FILMMAKERS est une structure créative dédiée à la production
          cinématographique innovante, portée par une nouvelle génération de
          talents africains.
          <span>
            Vision  Discipline  Impact.
          </span>
        </p>

        <button>Explorer nos projets</button>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <h3>Qui sommes-nous</h3>
        <p>
          NEXTGEN FILMMAKERS est un collectif de passionnés 
          engagés dans la construction d’un cinéma audacieux,
          moderne et compétitif à l’échelle internationale.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="section dark" id="projects">
        <h3>Nos projets</h3>
        <p>
          Courts-métrages, longs-métrages, séries et contenus digitaux.
          Chaque projet est conçu avec une exigence artistique et une vision
          stratégique orientée vers l’impact culturel et économique.
        </p>
      </section>

      {/* PARTNERS */}
      <section className="section" id="partners">
        <h3>Partenariats & investissements</h3>
        <p>
          Nous collaborons avec des investisseurs, institutions et marques
          partageant une même ambition : bâtir un cinéma durable, structuré et
          rentable.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section dark" id="contact">
        <h3>Entrons en contact</h3>
        <p>
          Vous souhaitez investir, collaborer ou soutenir nos productions ?
          Parlons-en.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} NEXTGEN FILMMAKERS — Tous droits réservés
      </footer>
    </>
  );
}

export default App;
