import React from 'react';
import IMG1 from '../../assets/Booki.png';
import IMG2 from '../../assets/Qwenta.png';
import IMG3 from '../../assets/Nina.png';
import IMG4 from '../../assets/Architecteinterieur.png';
import IMG5 from '../../assets/Kasa.png';
import IMG6 from '../../assets/Backend.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Booki',
      img: IMG1,
      description:
        'Créez la page d\'accueil d\'une agence de voyage avec HTML & CSS',
      technologies: 'HTML | CSS | Figma | GitHub',
      problématique: 'Manque d\'expérience en responsive design au début du projet, ce qui a posé des défis pour adapter la conception à différentes tailles d\'écrans',
      github: 'https://github.com/ELBOUKHARI-Med/Booki.git',
    },
    {
      id: 2,
      title: 'Portfolio architecte intérieur',
      img: IMG4,
      description:
        'Créez une page web dynamique avec JavaScript',
      technologies: 'Javascript | HTML | CSS',
      problématique: ' J\'ai rencontré des difficultés pour vérifier le token utilisateur et valider son statut d\'administrateur lors de mon projet en Javascript',
      github: 'https://github.com/ELBOUKHARI-Med/Portfolio-architecte.git',
    },
    {
      id: 3,
      title: 'MENU MAKER by Qwenta',
      img: IMG2,
      description: 'Planifiez le développement du site de votre client',
      technologies: 'Gestion de projet | Kanban | JIRA | AGILE | PowerPoint',
      problématique: 'Notion : riche et complexe. J\'ai dû explorer de nombreux tutoriels pour réussir le projet',
      github: 'https://github.com/ELBOUKHARI-Med',
    },
    {
      id: 4,
      title: 'NINA CARDUCCI PHOTOGRAPHIE',
      img: IMG3,
      description:
        'Débuggez et optimisez un site de photographe',
      technologies: 'SEO | Wave | Rich Snippet',
      problématique: 'Scores fluctuants avec Lighthouse. Corrections pour score stable > 90',
      github: 'https://github.com/ELBOUKHARI-Med/nina-carducci.git',
    },
    {
      id: 5,
      title: 'KASA',
      img: IMG5,
      description:
        'Créez une application web de location immobilière avec React',
      technologies: 'React.js | SCSS | Node.js',
      problématique: 'Problème de bonnes pratiques. Découvertes en React : composants réutilisables, "key", gestion des états.',
      github: 'https://github.com/ELBOUKHARI-Med/KASA.git',
    },
    {
      id: 6,
      title: 'MON VIEUX GRIMOIRE',
      img: IMG6,
      description:
        'Développez le back-end d\'un site de notation de livres',
      technologies: 'JavaScript | MongoDB | Node.js | API | Green Code',
      problématique: 'Sécurisation du site : sans expérience en back-end, découverte du module "mongo-sanitize" pour nettoyer les données avant insertion dans MongoDB',
      github: 'https://github.com/ELBOUKHARI-Med/Mon-Vieux-Grimoire.git',
    },
  ];

  return (
    <section id="portfolio">
      <h5>Mon travail récent</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
              <p>{pro.problématique}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                
                rel="noreferrer"
              >
                GitHub
              </a>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;