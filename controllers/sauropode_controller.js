const { Pool } = require('pg');

const pool = new Pool();

const sauropodeController = {
  searchSauropodes: async (req, res) => {
    const { searchTerm } = req.query;

    try {
      const query = `
        SELECT
          animal.nom, animal.nom_scientifique FROM animal
        WHERE
          animal.nom ILIKE $1 OR animal.nom_scientifique ILIKE $2`;

      const results = await pool.query(query, [`%${searchTerm}%`, `%${searchTerm}%`]);

      console.log(results.rows);

      res.render('recherche', {
        results: results.rows, // Passer les résultats à la page de recherche
      });
    } catch (error) {
      // Gérez les erreurs de requête ici
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des données.');
    }
  },

  dinosLieuxByContinent: async (req, res) => {
    try {
      // Utilisez une requête préparée SQL pour récupérer les dinosaures par continent et lieu
      const query = `
        SELECT animal.nom, lieu.continent, lieu.endroit FROM animal_lieu
        INNER JOIN animal ON animal_lieu.animal_id = animal.id
        INNER JOIN lieu ON animal_lieu.lieu_id = lieu.id
        ORDER BY lieu.continent, lieu.endroit, animal.nom`;

      const results = await pool.query(query);

      // Renvoyez les données à la vue pour affichage
      res.render('dinoslieux', { dinosLieux: results.rows });
    } catch (error) {
      // Gérez les erreurs de requête ici
      console.error(error);
      res.status(500).send('Erreur lors de la récupération des données.');
    }
  },
};

module.exports = sauropodeController;
