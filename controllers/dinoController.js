const client = require('../pg');
const dataMapper = require('../database/dataMapper');

const dinoController = {
  getAllDinos: async (req, res, next) => {
    console.log(1);
    await client.query('SELECT nom FROM animal WHERE id != 35')
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
