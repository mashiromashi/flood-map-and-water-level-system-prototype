const db = require("../config/config.db");
const sequelize = db.sequelize;
const rain = db.rain;

exports.getAll = (req, res) => {
  rain
    .findAll({
      attributes: ["currentRainLevel", "createdAt"],
      order: [["createdAt", "ASC"]]
    })
    .then(data => {
      res.send(data);
    });
};
