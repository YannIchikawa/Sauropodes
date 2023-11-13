const bcrypt = require('bcrypt');
const userDataMapper = require('../database/dataMapper/dataMapper');

const userAuthController = {

  renderLoginPage(req, res) {
    res.render('login');
  },

  renderSignUpPage(req, res) {
    res.render('signup');
  },

  renderRecherchePage(req, res) {
    res.render('recherche');
  },

  async signup(req, res) {
    const {
      firstName, lastName, email, password, confirmPassword, favoriteDinosaur,
    } = req.body;

    try {
      if (password !== confirmPassword) {
        throw new Error('Les mots de passe ne correspondent pas.');
      }
      const hashedpassword = await bcrypt.hash(password, 10);
      const newUser = await userDataMapper.createUser({
        firstName,
        lastName,
        email,
        password: hashedpassword,
        favoriteDinosaur,
      });

      console.log('Nouvel utilisateur créé :', newUser);

      res.redirect('/confirmation');
    } catch (error) {
      console.error(error);
      res.render('signup', { error: 'Une erreur s\'est produite lors de l\'inscription.' });
    }
  },
};

module.exports = userAuthController;
