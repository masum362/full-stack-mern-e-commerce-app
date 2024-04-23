import mongoose, { Schema } from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     photoURL: {
//       type: String,
//     },
//     uid: {
//       type: String,
//       required: true,
//     },
//     role: {
//       required: true,
//       default: "user",
//     },
//   },
//   {timestamps:true}
// );

const userSchema = mongoose.Schema({
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
    role: {
      type: String,
      enum:['admin','user','manager',"super admin"],
      default:'user',
    },

},
{timestamps:true}
)

const userModel = new mongoose.model("user", userSchema);

export default userModel;
