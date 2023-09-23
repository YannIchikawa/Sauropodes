const express = require('express');

const app = express();
// const cors = require('cors')

require('dotenv').config();

const router = require('./controllers/router');

app.use(express.static('public'));
app.use(router);

app.set('view engine', 'ejs');
app.set('views', './views/pages');

const port = process.env.PORT || 1606;

// app.use(cors)

app.listen(port, () => {
  console.log(`L'application tourne ! C'est super et c'est sur le port ${port}`);
});
