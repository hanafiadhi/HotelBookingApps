import express from "express";
import { register, login } from "../controllers/auth.js";
const router = express.Router();
/**awdadwdadaws */
router.post("/register", register);
router.post("/login", login);
export default router;
