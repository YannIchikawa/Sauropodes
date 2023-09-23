const express = require('express');

const router = express.Router();
// const { userInfo } = require('os');
const dinoController = require('./dinoController');
const userAuthController = require('./userAuthController');

router.get('/', (req, res) => {
  res.render('Accueil');
});

router.get('/login', userAuthController.renderLoginPage);
router.get('/signup', userAuthController.renderSignUpPage);

// authController

// authusercontroller

router.get('/AllDinos', dinoController.getAllDinos);

// router.get ('/inscription' ())

// router.get ("",(req,res)=>  {
//   res.render ("/ unDinosaure", {getOneDino:result.rows
//    })
// })

router.use((req, res) => {
  res.status(404).render('404');
});
// const mainController = require('./controllers/mainController.js');
// const articleController = require('./controllers/articleController.js');

// router.get('/', mainController.home);
// router.get('/contact', mainController.contact);
// router.get('/article/:id', articleController.article);

module.exports = router;
