const nodemailer = require('nodemailer')
// Chargement du fichier contenent les variables d'environnements
require('dotenv').config()


// Transporter
const transporter = nodemailer.createTransport( {
    service : 'gmail',
    auth : {
        user : process.env.MAIL_GOOGLE_APP,
        pass : process.env.PASS_GOOGLE_APP
    }
})


module.exports = transporter