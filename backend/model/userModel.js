import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
  },
  uid: {
    type: String,
    required: true,
  },
});

const userModel = new mongoose.model("user", userSchema);

export default userModel;
