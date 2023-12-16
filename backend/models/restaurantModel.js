import mongoose from "mongoose";
const Schema = mongoose.Schema;

const restaurantSchema = new Schema(
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

module.exports = Restaurant;
