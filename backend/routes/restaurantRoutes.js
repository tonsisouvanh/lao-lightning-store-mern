import express from "express";
import multer from "multer";

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

// router.post("/uploadImage", (req, res) => {
//   uploadSingleImage(req.body.image)
//     .then((url) => res.send(url))
//     .catch((err) => res.status(500).send(err));
// });

// router.post("/uploadMultipleImages", (req, res) => {
//   uploadSingleImage
//     .uploadMultipleImages(req.body.images)
//     .then((urls) => res.send(urls))
//     .catch((err) => res.status(500).send(err));
// });

export default router;
