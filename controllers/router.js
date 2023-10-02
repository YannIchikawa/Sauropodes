const express = require('express');

const app = express();
const router = express.Router();
// const { userInfo } = require('os');
const dinoController = require('./dinoController');
const userAuthController = require('./userAuthController');
const sauropodeController = require('./sauropode_controller');
const userDataMapper = require('../database/dataMapper/dataMapper');

router.get('/', (req, res) => {
  res.render('Accueil');
});

router.get('/recherche', sauropodeController.searchSauropodes);

router.get('/accueil2', (req, res) => {
  res.render('Accueil2');
});

router.get('/login', userAuthController.renderLoginPage);
router.get('/signup', userAuthController.renderSignUpPage);
router.post('/signup', userAuthController.signup);

router.get('/confirmation', (req, res) => {
  res.render('confirmation'); // Utilisez le moteur de templates que vous utilisez (par exemple, EJS, Pug, etc.) pour afficher la page de confirmation.
});

router.get('/AllDinos', dinoController.getAllDinos);

router.use((req, res) => {
  res.status(404).render('404');
});

module.exports = router;
