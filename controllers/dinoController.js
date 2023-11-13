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
  dinoLieu: async (req, res, next) => {
    console.log(1);
    await client.query('SELECT animal.nom AS nom_animal,lieu.continent,lieu.endroit FROM animal_lieu JOIN animal ON animal_lieu.animal_id = animal.id JOIN lieu ON animal_lieu.lieu_id = lieu.id ORDER BY lieu.continent ASC, lieu.endroit ASC, animal.id ASC;')
      .then((result) => {
        console.log(result.rows);
        res.render('dinolieux', {
          infoDinoLieux: result.rows,

        });
      })
      .catch((error) => {
        console.trace(error);
        next();
      });
  },
};

module.exports = dinoController;
