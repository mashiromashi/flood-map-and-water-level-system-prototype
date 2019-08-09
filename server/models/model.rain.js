const mongoose = require("mongoose");
const floodMapSchema = require("../db/schema");

let rainModel = mongoose.model("rainModel", floodMapSchema, "Rain");

module.exports = rainModel;
