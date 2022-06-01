import Hotel from "../models/Hotel.js";
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
};
export const updateHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (err) {
    next(err);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "hotel was Delete" });
  } catch (err) {
    next(err);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const find = await Hotel.findById(req.params.id);
    res.status(200).json(find);
  } catch (err) {
    next(err);
  }
};
export const getAllHotel = async (req, res, next) => {
  try {
    res.status(200).json(await Hotel.find());
  } catch (err) {
    next(err);
  }
};
