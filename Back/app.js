// Importation du module cors
const CORS = require("cors")

// Importation d'express
const express = require('express')


// Initialisation de mon application avec Express
const app = express()

// Middleware pour parser le corps de la requête en JSON
app.use(express.json());


// BodyParser
const bodyParser = require('body-parser');

// Middleware pour parser le corps des requêtes
app.use(bodyParser.json());
// Utilise bodyParser pour traiter les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Configuration de CORS
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
  };
  app.use(CORS(corsOptions));
  
// Utilisation des routes
const routes = require("./routes");
app.use('/', routes)


// Exportation d emon apllication
module.exports = app