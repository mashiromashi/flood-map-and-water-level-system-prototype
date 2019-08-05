const db = require("../config/config.db");
const sequelize = db.sequelize;
const water = db.water;

exports.getAll = (req, res) => {
  water
    .findAll({
      attributes: ["currentwaterLevel", "createdAt"],
      order: [["createdAt", "ASC"]]
    })
    .then(data => {
      res.send(data);
    });
};
