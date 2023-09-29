const client = require('../pg');
const pool = require('../database/config');

const dinoController = {
  getAllDinos: async (req, res, next) => {
    console.log(1);
    await client.query('SELECT nom, nom_scientifique FROM animal')
      .then((result) => {
        console.log(result.rows);
        res.render('AllDinos', {
          infoDino: result.rows,

        });
      })
      .catch((error) => {
        console.trace(error);
        next();
      });
  },

};

module.exports = dinoController;
