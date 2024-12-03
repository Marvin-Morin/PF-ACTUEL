// Importation d'express
const express = require('express');
// Initialisation de router pour mon app
const router = express.Router()


// Utilisation des routes pour mon formulaire
const form = require('./form')

// Importation des routes pour mon formulaire
router.use("/contact", form)


module.exports = router