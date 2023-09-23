require('dotenv').config();
const pg = require('pg');

const { Client } = require('pg');

const client = new Client(process.env.PG_URL);

client.connect()
  .then(console.log('la DB est bien connectée !'))
  .catch((erreur) => {
    console.log(erreur);
  });

module.exports = client;
