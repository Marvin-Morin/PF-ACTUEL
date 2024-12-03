const mongoose = require('mongoose');

const formulaire = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  entreprise: String,
  objet: String,
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});


const Contact = mongoose.model('Contact', formulaire);


module.exports = Contact;