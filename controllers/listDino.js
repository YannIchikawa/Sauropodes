const { Dino } = require;

module.exports = {

  async getAll(_, res) {
    const dinos = await Dino.findAll();
    res.json(dinos);
  },

};
