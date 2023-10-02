const bcrypt = require('bcrypt');
const { Pool } = require('pg');
const jest = require('../helpers/jest.config');

const pool = new Pool({
  // Configuration de la connexion à PostgreSQL
  user: 'votre_utilisateur',
  host: 'localhost',
  database: 'votre_base_de_données',
  password: 'votre_mot_de_passe',
  port: 5432,
});

const userController = {
  renderSignUpPage(req, res) {
    res.render('signup');
  },

  async registerUser(req, res) {
    try {
      const {
        firstName, lastName, email, password, confirmPassword, favoriteDinosaur,
      } = req.body;

      // Vérification que tous les champs sont remplis
      if (!firstName || !lastName || !email || !password || !confirmPassword || !favoriteDinosaur) {
        throw new Error('Tous les champs sont obligatoires.');
      }

      // Vérification du format de l'adresse e-mail
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        throw new Error('L\'adresse e-mail n\'est pas valide.');
      }

      // Vérification que les mots de passe correspondent
      if (password !== confirmPassword) {
        throw new Error('Les mots de passe ne correspondent pas.');
      }

      // Vérification si l'e-mail est déjà utilisé dans la base de données
      const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (existingUser.rows.length > 0) {
        throw new Error('Cet e-mail est déjà utilisé.');
      }

      // Hashage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insérer l'utilisateur dans la base de données
      const insertQuery = `
        INSERT INTO users (first_name, last_name, email, password, favorite_dinosaur)
        VALUES ($1, $2, $3, $4, $5)
      `;

      await pool.query(insertQuery, [firstName, lastName, email, hashedPassword, favoriteDinosaur]);

      // Redirection vers une page de confirmation ou autre
      res.redirect('/confirmation');
    } catch (error) {
      console.error(error.message);
      res.redirect('/signup'); // Rediriger l'utilisateur vers la page d'inscription avec un message d'erreur
    }
  },
};

module.exports = userController;
