import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name should contain atleast 3 characters"],
    maxLength: [3, "First name can have maximum 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name should contain atleast 3 characters"],
    maxLength: [3, "Last name can have maximum 30 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide valid email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number should be 10 characters"],
    maxLength: [10, "Phone number should be 10 characters"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
