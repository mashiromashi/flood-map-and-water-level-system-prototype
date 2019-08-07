import { Mongoose } from "mongoose";

const waterModel = Mongoose.model("water", {
  waterLevel: integer,
  createdAt: { type: Date, default: Date.now }
});
