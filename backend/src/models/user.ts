import mongoose, { Schema, model, connect } from "mongoose";

interface IUser {
  email: string;
  username: string;
  password: string;
  friends: Object[];
}

const userSchema = new Schema<IUser>({
  email: { type: String, unique: true },
  username: { type: String },
  password: { type: String },
  friends: [{ type: Object, ref: "User" }],
});

export const User = mongoose.model("User", userSchema);
