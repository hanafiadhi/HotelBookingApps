import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello this is Route rooms");
});

export default router;
