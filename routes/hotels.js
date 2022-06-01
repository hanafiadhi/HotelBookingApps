import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controllers/Hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../util/error.js";
import { verifyAdmin } from "../util/verifyToken.js";
const router = express.Router();

//Create
router.post("/create", verifyAdmin, createHotel);

//Update
router.put("/:id", verifyAdmin, updateHotel);

//Delete
router.delete("/:id", verifyAdmin, deleteHotel);

//Get
router.get("/:id", getHotel);

//Get All
router.get("/", getAllHotel);

export default router;
