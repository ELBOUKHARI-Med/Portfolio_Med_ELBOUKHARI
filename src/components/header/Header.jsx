import React from 'react'; // Importation du module React.
import CTA from './CTA'; // Importation du composant CTA depuis le fichier CTA.js.
import HeaderSocials from './HeaderSocials'; // Importation du composant HeaderSocials depuis le fichier HeaderSocials.js.
import './header.css'; // Importation du fichier CSS de style pour le composant.

const Header = () => { // Définition du composant Header sous forme de fonction.
  return ( // Rendu du composant Header.
    <header id="home"> {/* Balise d'en-tête avec l'identifiant "home" */}
      <div className="container header__container"> {/* Conteneur pour l'en-tête */}
        <h5>Bonjour, je suis</h5> {/* Titre "Bonjour, je suis" */}
        <h1>Mohammed BK</h1> {/* Titre principal avec le nom */}
        <h5 className="text-light">Développeur Full-stack</h5> {/* Sous-titre "Développeur Full-stack" */}
        <CTA /> {/* Appel au composant CTA pour afficher les boutons d'appel à l'action */}
        <a href="#contact" className="scroll__down"> {/* Lien pour faire défiler vers le bas vers la section de contact */}
          Défiler vers le bas
        </a>
        <HeaderSocials /> {/* Appel au composant HeaderSocials pour afficher les icônes de réseaux sociaux */}
      </div>
    </header>
  );
};

export default Header; // Exportation du composant Header par défaut.
