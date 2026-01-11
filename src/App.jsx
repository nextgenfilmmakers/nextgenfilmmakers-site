import { useEffect, useState } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [structure, setStructure] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ref = doc(db, "pages", "a_propos");
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setStructure(snap.data());
        }
      } catch (error) {
        console.error("Erreur Firestore :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <span>Chargement…</span>
      </div>
    );
  }

  return (
    <>
      <header className="header">
        <div className="logo-block">
          <h1 className="logo">
            {structure?.nom_structure || "NEXTGEN FILMMAKERS"}
          </h1>
          <p className="slogan">
            {structure?.slogan ||
              "Façonner l'avenir du cinéma, une vision à la fois"}
          </p>
        </div>

        <nav className="nav">
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#equipe">Équipe</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <div className="hero-content">
          <h2>
            L’avenir du cinéma africain
            <br />
            commence ici
          </h2>

          <p>
            NEXTGEN FILMMAKERS est une structure dédiée à la création,
            l’accompagnement et la valorisation des talents cinématographiques
            émergents.
          </p>

          <button>Devenir partenaire</button>
        </div>
      </main>
    </>
  );
}
