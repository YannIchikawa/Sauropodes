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

      const newUser = await userDataMapper.createUser({
        firstName,
        lastName,
        email,
        password,
        favoriteDinosaur,
      });

      console.log('Nouvel utilisateur créé :', newUser);

      res.redirect('/confirmation');
    } catch (error) {
      console.error(error); // Vous pouvez ajouter un journal ici pour enregistrer l'erreur
      res.render('signup', { error: 'Une erreur s\'est produite lors de l\'inscription.' });
    }
  },
};

module.exports = userAuthController;
