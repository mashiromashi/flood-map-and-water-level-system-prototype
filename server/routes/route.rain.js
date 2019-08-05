module.exports = function(app) {
  const rain = require("../controllers/controller.rain");

  app.get("/rain/getall", rain.getAll);
};
