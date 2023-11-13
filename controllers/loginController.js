const express = require('express');
const bcrypt = require('bcrypt');
const userModel = require('../helpers/userModel');

const loginController = express.Router();

loginController.get('/renderLogin', (req, res) => {
  res.render('login');
});

loginController.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "L'utilisateur n'existe pas" });
    }

    console.log(res.statusCode);
    console.log('Mot de passe saisi :', password);
    console.log('Mot de passe haché enregistré :', user.hashedpassword);

    if (!password || !user.hashedpassword) {
      return res.status(401).json({ message: 'Mot de passe invalide' });
    }

    console.log('Mot de passe saisi :', password);
    console.log('Mot de passe haché enregistré :', user.hashedpassword);
    const passwordMatch = await bcrypt.compare(password, user.hashedpassword);
    console.log(passwordMatch);
    console.log('Mot de passe saisi :', password);
    console.log('Mot de passe haché enregistré :', user.hashedpassword);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    req.session.user = user;

    res.redirect('/Accueil2');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de l\'authentification' });
  }
});

module.exports = loginController;
