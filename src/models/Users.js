import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  // à compléter (modèle des utilisateurs)
});

const UsersModel = mongoose.model("Users", usersSchema);

export default UsersModel;
