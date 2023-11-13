const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const pool = new Pool();

const userDataMapper = {
  async createUser(userData) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const {
        firstName, lastName, email, password, favoriteDinosaur,
      } = userData;

      // Utilisation d'une requête préparée pour insérer un utilisateur
      const query = `
        INSERT INTO users (first_name, last_name, email, hashedpassword, favoriteSauropode)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
      `;
      const values = [firstName, lastName, email, password, favoriteDinosaur];

      const result = await client.query(query, values);
      await client.query('COMMIT');

      return result.rows[0]; // Retourne les données de l'utilisateur créé
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  },
};

module.exports = userDataMapper;
