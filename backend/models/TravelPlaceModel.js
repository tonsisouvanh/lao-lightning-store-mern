import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TravelPlaceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
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

const TravelPlace = mongoose.model("TravelPlace", TravelPlaceSchema);

export default TravelPlace;
