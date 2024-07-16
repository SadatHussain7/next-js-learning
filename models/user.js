import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email is already registered"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    match: [
      /^[a-zA-Z0-9]{8,20}$/,
      "Username must be 8-20 alphanumeric characters",
    ],
  },
  image: {
    type: String,
  },
});

export default models.User || model("User", userSchema);
