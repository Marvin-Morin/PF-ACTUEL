// Chargement du fichier contenent les variables d'environnements
require('dotenv').config()
// Importation de mon application
const app = require("./app")


// Initialisation du port pour le server
const PORT = process.env.SERVER_PORT

// Lancement du server sur le port indiqué
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`)
});