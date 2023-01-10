import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';
import {CloudinaryStorage} from "multer-storage-cloudinary"
dotenv.config()

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_KEY_SECRET,
  secure: true,
});
const storeImage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "MY-Pictures",
  },
});
export default storeImage;
