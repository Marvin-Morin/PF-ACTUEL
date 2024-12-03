// Importation du module mongoose afin de se connecter au serveur
const mongoose = require('mongoose')
// Chargement du fichier contenent les variables d'environnements
require('dotenv').config()


// URL de ma base de données
const DB_URL = process.env.DB_URL

// Vérifiaction de l'url de la base
if(!DB_URL) {
    console.log("URL DE LA BDD INCORECTE")
}

// Initialisation de la connexion 
mongoose.connect(DB_URL);


// Récupération de l'objet de connexion mongodb
const db = mongoose.connection;
// Géstion lié à la connexion
db.on('error', console.error.bind(console, 'MongoDB connexion erreur:'));
db.once('open', function() {
    console.log("Connecté à la base de données !");
});


module.exports = { mongoose }