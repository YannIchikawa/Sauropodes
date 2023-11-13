const pool = require('../database/config');

exports.dinosLieuxByContinent = (req, res) => {
  // Exécutez une requête SQL pour obtenir les données
  pool.query(
    'SELECT animal.nom, lieu.continent, lieu.endroit FROM animal_lieu '
      + 'INNER JOIN animal ON animal_lieu.animal_id = animal.id '
      + 'INNER JOIN lieu ON animal_lieu.lieu_id = lieu.id '
      + 'ORDER BY lieu.continent, lieu.endroit, animal.nom',
    (error, results) => {
      if (error) {
        // Gérez les erreurs de requête ici
        console.error(error);
        res.status(500).send('Erreur lors de la récupération des données.');
      } else {
        // Renvoyez les données à la vue pour affichage
        res.render('dinoslieux', { dinosLieux: results.rows });
      }
    },
  );
};
