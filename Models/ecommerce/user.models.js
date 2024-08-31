import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      typer: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      typer: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = new mongoose.model('User', userSchema);
