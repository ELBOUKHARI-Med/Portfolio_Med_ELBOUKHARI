import React from 'react'; // Importation du module React.
import { FaAward } from 'react-icons/fa'; // Importation de l'icône de récompense de React-icons.
import { VscFolderLibrary } from 'react-icons/vsc'; // Importation de l'icône de bibliothèque de dossiers de React-icons.
import ME from '../../assets/me.jpg'; // Importation de l'image "me" depuis le dossier des actifs.
import './intro.css'; // Importation du fichier CSS de style pour le composant.

const Intro = () => { // Définition du composant Intro sous forme de fonction.
  return ( // Rendu du composant Intro.
    <section id="about"> {/* Section d'introduction avec l'identifiant "about" */}
      <h5>Faisons connaissance</h5> {/* Sous-titre "Faisons connaissance" */}
      <h2>À propos de moi</h2> {/* Titre "À propos de moi" */}
      <div className="container about__container"> {/* Conteneur principal pour l'introduction */}
        <div className="about__me"> {/* Conteneur pour l'image et les cartes d'informations */}
          <div className="about__me-image"> {/* Conteneur pour l'image personnelle */}
            <img src={ME} alt="me" /> {/* Affichage de l'image personnelle */}
          </div>
        </div>
        <div className="about__content"> {/* Conteneur pour le contenu de l'introduction */}
          <div className="about__cards"> {/* Conteneur pour les cartes d'informations */}
            <article className="about__card"> {/* Carte d'information pour l'expérience */}
              <FaAward className="about__icon" /> {/* Icône de récompense */}
              <h5>Expérience</h5> {/* Titre "Expérience" */}
              <small>Débutant</small> {/* Durée de l'expérience */}
            </article>
            <article className="about__card"> {/* Carte d'information pour les projets */}
              <VscFolderLibrary className="about__icon" /> {/* Icône de bibliothèque de dossiers */}
              <h5>Projets</h5> {/* Titre "Projets" */}
              <small>8 projets terminés</small> {/* Nombre de projets terminés */}
            </article>
          </div>
          <p> {/* Paragraphe avec une description de l'expérience et des compétences */}
            J'ai suivi une formation de 8 mois chez Openclassrooms en tant que développeur web, où j'ai acquis des compétences approfondies en HTML, CSS et JavaScript. Pendant cette période, j'ai construit des pages web dynamiques et des API. De plus, j'ai accumulé 9 années d'expérience en tant qu'ingénieur en génie électrique dans le secteur de l'automobile, en me spécialisant dans les systèmes embarqués. Cette expérience m'a permis de développer une expertise technique solide et de travailler sur des projets complexes. En tant qu'ingénieur, j'ai collaboré avec des équipes multidisciplinaires et résolu des problèmes techniques tout en respectant les exigences de l'industrie automobile. Ces expériences combinées m'ont permis de devenir un professionnel efficace, créatif et capable de m'adapter à des environnements de travail variés et exigeants.
          </p>
          <a href="#contact" className="btn btn-primary">Parlons-en</a> {/* Lien pour accéder à la section de contact */}
        </div>
      </div>
    </section>
  );
}

export default Intro; // Exportation du composant Intro par défaut.
