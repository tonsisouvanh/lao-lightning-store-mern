import express from "express";
const router = express.Router();
import {
  getRestaurants,
  getRestaurantById,
  deleteRestaurant,
  createRestaurant,
  updateRestaurant,
  createRestaurantReview,
  getTopRestaurants,
} from "../controllers/restaurantController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getRestaurants).post(protect, admin, createRestaurant);
router.route("/:id/reviews").post(protect, createRestaurantReview);
router.get("/top", getTopRestaurants);
router
  .route("/:id")
  .get(getRestaurantById)
  .delete(protect, admin, deleteRestaurant)
  .put(protect, admin, updateRestaurant);

export default router;
