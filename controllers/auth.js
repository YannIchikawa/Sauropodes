// auth.js

const express = require('express');

const router = express.Router();

// Utilisateur fictif pour la démonstration
const fakeUser = {
  username: 'utilisateur',
  password: 'motdepasse',
};

// Page de connexion
router.get('/login', (req, res) => {
  res.render('login');
});

// Traitement de la soumission du formulaire de connexion
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === fakeUser.username && password === fakeUser.password) {
    res.send('Connexion réussie !');
  } else {
    res.send('Échec de la connexion. Veuillez vérifier vos informations.');
  }
});

module.exports = router;
