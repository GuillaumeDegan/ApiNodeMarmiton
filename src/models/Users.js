import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phoneNumber: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const UsersModel = mongoose.model("Users", usersSchema);

export default UsersModel;
