import userModel from "../model/userModel.js";

const homePage = (req, res) => {
  console.log("homepage called");
};

const registerUser = async (req, res) => {
  const { name, email, uid, photoURL } = req.body;

  const newUser = new userModel({ name, email, uid, photoURL });

  try {
    await newUser.save();
    return res
      .status(201)
      .json({ message: "succesfully user saved", user: newUser });
  } catch (error) {
    return res.status(501).json({ message: "error while user saving"});
  }
};

export { homePage, registerUser };
