export const SERVER_URL =
  import.meta.env.VITE_SERVER_URL || "http://localhost:3001";

export const API_URL = `${SERVER_URL}/api`;

export const uploadUrl = (filename) => `${SERVER_URL}/uploads/${filename}`;
