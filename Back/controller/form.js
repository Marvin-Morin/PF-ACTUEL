const nodemailer = require('nodemailer');
const transporter = require('../config/nodemailer');
// Chargement du fichier contenent les variables d'environnements
require('dotenv').config()

// Fonction pour gérer l'envoi d'email
exports.formulaire_controller = async (req, res) => {

  try {

  const { nom, prenom, email, entreprise, objet, message } = req.body;

  console.log("req body : ", JSON.stringify(req.body));

  // Options de l'email
  await transporter.sendMail( {
    from:  email,
    to:  process.env.MAIL_GOOGLE_APP,
    subject: objet || 'Nouveau message de contact', 
    text: `
      Nouveau message de contact via portfolio en ligne de :

      Nom: ${nom}
      Prénom: ${prenom}
      Email: ${email}
      Entreprise: ${entreprise}
      Objet: ${objet}
      Message: ${message}
    `,
    html: `
      <p>Nouveau message de contact via portfolio en ligne de :</p>
      <p><strong>Nom:</strong> ${nom}</p>
      <p><strong>Prénom:</strong> ${prenom}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Entreprise:</strong> ${entreprise}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  })

  // Envoye de l'email
 res.status(200).json( { message : "Email envoyé avec succès"})
} catch (error) {
  res.status(500).json( { message : "Erreur lors de l'envoi de l'email"})
}
};
