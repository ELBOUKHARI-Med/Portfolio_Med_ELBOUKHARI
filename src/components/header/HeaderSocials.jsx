import React from 'react'; // Importation du module React.
import { BsLinkedin } from 'react-icons/bs'; // Importation de l'icône de LinkedIn de React-icons.
import { FaGithub } from 'react-icons/fa'; // Importation de l'icône de GitHub de React-icons.

const HeaderSocials = () => { // Définition du composant HeaderSocials sous forme de fonction.
  return ( // Rendu du composant HeaderSocials.
    <div className="header__socials"> {/* Conteneur pour les icônes de réseaux sociaux */}
      <a href="https://www.linkedin.com/in/mohammed-elboukhari" target="_blank" rel="noreferrer" ><BsLinkedin /></a> {/* Lien vers LinkedIn avec l'icône */}
      <a href="https://github.com/ELBOUKHARI-Med" target="_blank" rel="noreferrer" ><FaGithub /></a> {/* Lien vers GitHub avec l'icône */}
    </div>
  );
}

export default HeaderSocials; // Exportation du composant HeaderSocials par défaut.
