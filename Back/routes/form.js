const express = require('express')
const router = express.Router()
// Controller du formulaire
const form = require("../controller/form")


// Route pour le formulaire de contact
router.post('/formulaire', form.formulaire_controller)

router.get('/test', (req, res) => {
    res.send('La route fonctionne correctement');
  });
  


// Exportez le router
module.exports = router