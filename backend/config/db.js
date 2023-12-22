import mongoose from "mongoose";

const connectDB = async () => {
  console.log("tonnn", process.env.CLOUDINARY_CLOUD_NAME);
  console.log("tonnn", process.env.CLOUDINARY_API_KEY);
  console.log("tonnn", process.env.CLOUDINARY_API_SECRET);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
