import mongoose from "mongoose";

const connection = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("database connection established"))
    .catch((err) => console.log(err));
};

export default connection;
