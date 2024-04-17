import axios from "axios";

export const apiInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:3000",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": `${process.env.API_KEY}`,
    "X-RapidAPI-Host": `${process.env.API_HOST}`,
  },
});
