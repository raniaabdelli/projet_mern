const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("database connected"))
    .catch((err) => {
      if (err) throw err;
    });
};
module.exports = connectDB;
