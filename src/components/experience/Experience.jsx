import React from 'react'; // Importation du module React.
import { BsFillPatchCheckFill } from 'react-icons/bs'; // Importation de l'icône de vérification de React-icons.
import './experience.css'; // Importation du fichier CSS de style pour le composant.

const Experience = () => { // Définition du composant Experience sous forme de fonction.
  return ( // Rendu du composant Experience.
    <section id="experience">
      <h5>Les compétences que je possède</h5>
      <h2>Compétences</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Développement Front-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>SASS</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Développement Back-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Node.js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Express</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Swagger</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; // Exportation du composant Experience par défaut.
