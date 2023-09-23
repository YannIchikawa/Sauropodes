const userAuthController = {

  renderLoginPage(req, res) {
    res.render('login');
  },

  renderSignUpPage(req, res) {
    res.render('signup');
  },
};

module.exports = userAuthController;
