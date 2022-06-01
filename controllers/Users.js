import Users from "../models/Users.js";

// export const createUsers = async (req, res, next) => {
//   const newUsers = new Users(req.body);
//   try {
//     const savedUsers = await newUsers.save();
//     res.status(200).json(savedUsers);
//   } catch (err) {
//     next(err);
//   }
// };
export const updateUsers = async (req, res, next) => {
  try {
    const updateUsers = await Users.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUsers);
  } catch (err) {
    next(err);
  }
};
export const deleteUsers = async (req, res, next) => {
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Users was Delete" });
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (req, res, next) => {
  try {
    const find = await Users.findById(req.params.id);
    res.status(200).json(find);
  } catch (err) {
    next(err);
  }
};
export const getAllUsers = async (req, res, next) => {
  try {
    res.status(200).json(await Users.find());
  } catch (err) {
    next(err);
  }
};
