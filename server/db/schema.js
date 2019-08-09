const mongoose = require("mongoose");
const moment = require("moment");

const DateTime = moment(new Date()).format("DD-MMM-YYYY_hh:mm:ss");

const floodMapSchema = new mongoose.Schema({
  level: {
    type: mongoose.Decimal128
  },
  createdAt: {
    type: String,
    default: DateTime
  }
});
module.exports = floodMapSchema;
