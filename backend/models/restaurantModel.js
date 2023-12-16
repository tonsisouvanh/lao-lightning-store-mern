import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    openingHours: {
      type: String,
    },
    location: {
      type: String,
      required: true,
    },
    image: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
