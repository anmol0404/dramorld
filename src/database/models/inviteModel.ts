import mongoose, { Document, Schema, Model } from "mongoose";
import { InviteUserDocument } from "../interfaces/inviteUser.js";

export interface IUserDocument extends InviteUserDocument, Document {}

const inviteSchema: Schema<IUserDocument> = new Schema({
  userId: { type: String, required: true },
  invites: [
    {
      username: { type: String, required: true },
      userId: { type: String, required: true },
    },
  ],
  lastRequestDate: { type: Date, default: Date.now },
  dailyRequests: { type: Number, default: 5 },
});

export const InviteModel: Model<IUserDocument> =
  mongoose.models.InviteUser ||
  mongoose.model<IUserDocument>("InviteUser", inviteSchema);
