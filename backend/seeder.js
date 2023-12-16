import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
// DATA
import users from "./data/userData.js";
import categories from "./data/categoryData.js";
import tags from "./data/tagData.js";
import blogs from "./data/blogData.js";
// MODEL
import User from "./models/userModel.js";
import Category from "./models/categoryModel.js";
import Tag from "./models/tagModel.js";
import Blog from "./models/blogModel.js";

import connectDB from "./config/db.js";
import TravelPlace from "./models/TravelPlaceModel.js";
import travelplaces from "./data/travelPlaceData.js";
import Restaurant from "./models/restaurantModel.js";
import restaurants from "./data/restaurantData.js";
import Food from "./models/foodModel.js";
import foods from "./data/foodData.js";
import Store from "./models/storeModel.js";
import stores from "./data/storeData.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Category.deleteMany();
    await Tag.deleteMany();
    await Blog.deleteMany();
    await TravelPlace.deleteMany();
    await Restaurant.deleteMany();
    await Food.deleteMany();
    await Store.deleteMany();

    const createdUsers = await User.insertMany(users);
    const createdCategories = await Category.insertMany(categories);
    const createdTags = await Tag.insertMany(categories);
    const createdBlogs = await Blog.insertMany(blogs);
    const createdTravelPlaces = await TravelPlace.insertMany(travelplaces);
    const createdRestaurants = await Restaurant.insertMany(restaurants);
    const createdFood = await Food.insertMany(foods);
    const createdStore = await Store.insertMany(stores);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await Order.deleteMany()
    // await Product.deleteMany()
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
