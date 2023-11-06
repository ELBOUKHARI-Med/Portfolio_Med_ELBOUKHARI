import React, { useRef, useState } from 'react'; // Importation des modules React et d'autres hooks.
import emailjs from '@emailjs/browser'; // Importation du module emailjs pour envoyer des e-mails.
import { MdOutlineEmail } from 'react-icons/md'; // Importation de l'icône d'e-mail de React-icons.
import './contact.css'; // Importation du fichier CSS de style pour le composant.

const Contact = () => { // Définition du composant Contact sous forme de fonction.
  const [message, setMessage] = useState(false); // Utilisation du hook d'état pour gérer l'affichage du message de confirmation.
  const formRef = useRef(); // Utilisation du hook useRef pour faire référence au formulaire.

  const handleSubmit = (e) => { // Fonction de gestion de soumission du formulaire.
    e.preventDefault(); // Empêche le comportement par défaut de la soumission du formulaire.

    setMessage(true); // Met à jour l'état pour afficher le message de confirmation.

    // Appel de la fonction sendForm de emailjs pour envoyer le formulaire.
    emailjs.sendForm(
      'service_k2qawqh', // ID du service sur emailjs.
      'template_c6rkpn6', // ID du modèle de l'e-mail sur emailjs.
      formRef.current, // Référence au formulaire courant.
      'X7K7ebhIeOy3YwHki' // ID du compte utilisateur sur emailjs.
    ).then(
      (result) => { // Réussite de l'envoi de l'e-mail.
        console.log(result.text); // Affiche le texte de la réponse dans la console.
      },
      (error) => { // Erreur lors de l'envoi de l'e-mail.
        console.log(error.text); // Affiche le texte d'erreur dans la console.
      }
    );

    e.target.reset(); // Réinitialise les valeurs du formulaire après la soumission.
  };

  return ( // Rendu du composant Contact.
    <section id="contact">
      <h5>Contactez-moi</h5>
      <h5>
        Je reçois vos messages et y répondrai dès que possible si vous fournissez une adresse e-mail valide :)
      </h5>
      <h2>Contactez-moi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mohammed.el.boukhari01@gmail.com</h5>
            <a href="mailto:mohammed.el.boukhari01@gmail.com">Envoyer un message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}> {/* Formulaire avec référence et gestionnaire de soumission */}
          <input
            type="text"
            placeholder="Votre nom complet"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Votre email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Votre message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer le message
          </button>
          {message && <span>Merci, je vous répondrai dès que possible :)</span>} {/* Affichage du message de confirmation */}
        </form>
      </div>
    </section>
  );
};

export default Contact; // Exportation du composant Contact par défaut.
