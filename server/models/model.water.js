const mongoose = require("mongoose");
const floodMapSchema = require("../db/schema");

let waterModel = mongoose.model("waterModel", floodMapSchema, "Water");

module.exports = waterModel;
