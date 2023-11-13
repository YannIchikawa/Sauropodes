const { Pool } = require('pg');

const pool = new Pool();

const userModel = {
  async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    console.log('Requête SQL:', query, 'Paramètre email:', email);
    const result = await pool.query(query, [email]);
    console.log('Résultat de la requête SQL:', result);

    if (result.rows.length === 0) {
      return null; // Aucun utilisateur trouvé avec cet e-mail
    }
    const user = result.rows[0];
    const { id, hashedpassword /* autres propriétés de l'utilisateur */ } = user;
    console.log("Utilisateur trouvé avec l'e-mail:", email);
    console.log("Mot de passe haché de l'utilisateur:", hashedpassword);
    return {
      id,
      email,
      hashedpassword, // Incluez le mot de passe haché dans les données de l'utilisateur
      // ... autres propriétés de l'utilisateur
    };
  },

  // Ajoutez d'autres méthodes si nécessaire
};

module.exports = userModel;
