const pool = require('../pg');

const sauropodeController = {
  searchSauropodes: async (req, res, next) => {
    const { searchTerm } = req.query;

    // Utilisez une requête SQL pour rechercher des sauropodes par nom ou nom scientifique
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
  },
};

module.exports = sauropodeController;
