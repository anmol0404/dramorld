// models/MessageModel.ts
import mongoose, { model, Schema, Model } from "mongoose";

export interface MessageDocument {
  shareId: number;
  messageIds: number[];
}

export const MessageModel: Model<MessageDocument> =
  mongoose.models.message ||
  model<MessageDocument>(
    "message",
    new Schema({
      shareId: { type: Number, required: true, unique: true },
      messageIds: { type: [Number], required: true },
    })
  );
