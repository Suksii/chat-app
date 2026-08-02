import rateLimit from "express-rate-limit";

const options = {
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again later" },
};

export const loginLimiter = rateLimit({
  ...options,
  windowMs: 15 * 60 * 1000,
  limit: 10,
  skipSuccessfulRequests: true,
});

export const registerLimiter = rateLimit({
  ...options,
  windowMs: 60 * 60 * 1000,
  limit: 5,
});

export const uploadLimiter = rateLimit({
  ...options,
  windowMs: 60 * 60 * 1000,
  limit: 20,
});
