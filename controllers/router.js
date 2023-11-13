const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../helpers/userModel');

const router = express.Router();
const dinoController = require('./dinoController');
const userAuthController = require('./userAuthController');
const sauropodeController = require('./sauropode_controller');
const loginController = require('./loginController');
const userDataMapper = require('../database/dataMapper/dataMapper');

router.get('/', (req, res) => {
  res.render('Accueil');
});

router.get('/recherche', sauropodeController.searchSauropodes);

router.get('/accueil2', (req, res) => {
  res.render('Accueil2');
});

router.get('/login', userAuthController.renderLoginPage);
router.post('/login', loginController);
router.post('/logout', loginController);

router.get('/signup', userAuthController.renderSignUpPage);
router.post('/signup', userAuthController.signup);

router.get('/confirmation', (req, res) => {
  res.render('confirmation');
});

router.get('/AllDinos', dinoController.getAllDinos);

router.get('/dinoslieux', sauropodeController.dinosLieuxByContinent);

router.get('/remerciements', (req, res) => {
  res.render('remerciements');
});

router.get('/dinosperiodes');

router.use((req, res) => {
  res.status(404).render('404');
});

router.post('/AllDinos/:nom', (req, res) => {
  const nomSauropode = req.params.nom;
  res.render('sauropode', { nomSauropode });
});

module.exports = router;
