import mongoose, { Schema, model, connect } from "mongoose";

interface IUser {
  email: string;
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("user", userSchema);
