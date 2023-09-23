const client = require('../pg');

const listDinos = {
  getAllDinos: async () => await client.query('SELECT nom FROM animal'),
  getOneDino: async (id) => await client.query('SELECT * FROM animal WHERE id = $1', [id]),
};

module.exports = listDinos;
