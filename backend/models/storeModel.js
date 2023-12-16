import mongoose from "mongoose";
const Schema = mongoose.Schema;

const storeSchema = new Schema(
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
    },
    bitcoinPaymentEnabled: {
      type: Boolean,
      default: true,
    },
    acceptedCurrencies: {
      type: [String],
      default: ["USD"],
    },
    openingHours: {
      type: String,
    },
    contact: {
      email: String,
      phone: String,
    },
    website: String,
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", storeSchema);

export default Store;
