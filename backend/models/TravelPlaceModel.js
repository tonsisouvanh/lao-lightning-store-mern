import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TravelPlaceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    //   reviews: [
    //     {
    //       type: Schema.Types.ObjectId,
    //       ref: "Review", // Assuming you have a Review model
    //     },
    //   ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
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

module.exports = TravelPlace;
