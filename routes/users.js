import express from "express";
import {
  deleteUsers,
  getAllUsers,
  getUsers,
  updateUsers,
} from "../controllers/Users.js";
import { verifyAdmin, verifyToken, verifyUser } from "../util/verifyToken.js";

const router = express.Router();

// check auth
// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   // res.send("hello user, you are logged in and you can delete your account");
//   // res.send(req.user.id);
//   res.json({
//     userLogin: req.user.id,
//     userCheck: req.params.id,
//   });
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all accounts");
// });

//update
router.put("/:id", verifyUser, updateUsers);

//delete
router.delete("/:id", verifyUser, deleteUsers);

//get
router.get("/:id", verifyUser, getUsers);

//get all
router.get("/", verifyAdmin, getAllUsers);

export default router;
