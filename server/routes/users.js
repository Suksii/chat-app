import express from "express";
import multer from "multer";
import crypto from "crypto";
import { getUsers, uploadImage } from "../controllers/users.js";
import { authenticateUser } from "../middleware/userProfile.js";
import { uploadLimiter } from "../middleware/rateLimit.js";

const router = express.Router();

const ALLOWED_TYPES = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/gif", ".gif"],
]);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => {
    const name = crypto.randomBytes(16).toString("hex");
    cb(null, name + ALLOWED_TYPES.get(file.mimetype));
  },
});

const photoUpload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024, files: 1 },
  fileFilter: (req, file, cb) => {
    if (!ALLOWED_TYPES.has(file.mimetype)) {
      return cb(new Error("Only JPEG, PNG, WebP and GIF images are allowed"));
    }
    cb(null, true);
  },
});

const handleUploadErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    const message =
      err.code === "LIMIT_FILE_SIZE"
        ? "Image must be 2MB or smaller"
        : "Invalid upload";
    return res.status(400).json({ message });
  }
  if (err) return res.status(400).json({ message: err.message });
  next();
};

router.get("/", authenticateUser, getUsers);

router.post(
  "/upload",
  uploadLimiter,
  photoUpload.single("photo"),
  handleUploadErrors,
  uploadImage,
);

export default router;
