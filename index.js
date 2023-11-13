const express = require('express');
const session = require('express-session');
require('dotenv').config();

const app = express();
// const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./controllers/router');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.use(session({
  secret: 'Namakemono',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }, // Vous pouvez définir secure: true pour HTTPS
}));
app.use(router);
const port = process.env.PORT || 1606;

// app.use(cors)

app.listen(port, () => {
  console.log(`L'application tourne ! C'est super et c'est sur le port ${port}`);
});
