import React from 'react'; // Importation du module React.
import { BsLinkedin } from 'react-icons/bs'; // Importation de l'icône de LinkedIn de React-icons.
import { FaGithub } from 'react-icons/fa'; // Importation de l'icône de GitHub de React-icons.
import './footer.css'; // Importation du fichier CSS de style pour le composant.

const Footer = () => { // Définition du composant Footer sous forme de fonction.
  
  let getYear = () => { // Fonction pour obtenir l'année en cours.
    let currentYear = new Date().getFullYear(); // Obtient l'année en cours à partir de la date actuelle.
    return currentYear; // Renvoie l'année en cours.
  };
  
  return ( // Rendu du composant Footer.
    <footer>
      <a href="#home" className="footer__logo">Mohammed BK</a> {/* Lien de logo */}
      <ul className="permalinks"> {/* Liste de liens permanents */}
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#experience">Compétences</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials"> {/* Section des icônes de réseaux sociaux */}
        <a href="https://www.linkedin.com/in/mohammed-elboukhari" target="_blank" rel="noreferrer" ><BsLinkedin /></a> {/* Lien vers LinkedIn */}
        <a href="https://github.com/ELBOUKHARI-Med" target="_blank" rel="noreferrer" ><FaGithub /></a> {/* Lien vers GitHub */}
      </div>
      <div className="footer__copyright"> {/* Section des droits d'auteur */}
        <small>&copy; BKM {getYear()}. Tous droits réservés.</small> {/* Affiche l'année en cours et le texte des droits d'auteur */}
      </div>
    </footer>
  );
}

export default Footer; // Exportation du composant Footer par défaut.
