import mongoose from "mongoose";
const Schema = mongoose.Schema;

const foodSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: [String], // Assuming categories are strings
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    restaurants: [
      {
        type: Schema.Types.ObjectId,
        ref: "Restaurant", // Assuming you have a Restaurant model
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
