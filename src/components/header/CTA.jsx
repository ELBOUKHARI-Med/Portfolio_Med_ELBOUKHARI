import React from 'react'; // Importation du module React.
import CV from '../../assets/CV_MohammedELBOUKHARI.pdf'; // Importation du chemin vers le fichier PDF du CV.

const CTA = () => { // Définition du composant CTA (Call to Action) sous forme de fonction.
  return ( // Rendu du composant CTA.
    <div className="cta"> {/* Conteneur pour les appels à l'action */}
      <a href={CV} download className="btn"> {/* Lien pour télécharger le CV */}
        Télécharger CV
      </a>
      <a href="#contact" className="btn btn-primary"> {/* Lien pour aller à la section Contact */}
        Parlons-en
      </a>
    </div>
  );
};

export default CTA; // Exportation du composant CTA par défaut.
