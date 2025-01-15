// models/UserModel.ts
import mongoose, { model, Schema, Model } from "mongoose";
import { UserDocument } from "../interfaces/user";

const userSchema: Schema<UserDocument> = new Schema<UserDocument>({
  id: { type: Number, required: true, unique: true },
  is_bot: { type: Boolean, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String },
  username: { type: String },
  language_code: { type: String },
  is_premium: { type: Boolean },
  added_to_attachment_menu: { type: Boolean },
});

export const UserModel: Model<UserDocument> =
  mongoose.models.user || model<UserDocument>("user", userSchema);
