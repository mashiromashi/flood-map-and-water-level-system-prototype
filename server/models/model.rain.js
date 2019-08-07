import { Mongoose } from "mongoose";

const rainModel = Mongoose.model("rain", {
  rainLevel: integer,
  createdAt: { type: Date, default: Date.now }
});
