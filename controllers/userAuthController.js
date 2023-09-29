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
};

module.exports = userAuthController;
