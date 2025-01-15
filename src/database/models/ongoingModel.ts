import mongoose, { Model, Schema } from "mongoose";
import { OngoingDocument } from "../interfaces/ongoingDocument.js";

export const ongSchema = new Schema<OngoingDocument>(
  {
    shareId: {
      type: Number,
      required: true,
      unique: true,
    },
    messageIds: {
      type: [Number],
      required: true,
    },
    aIOTitle: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const OngoingModel: Model<OngoingDocument> =
  mongoose.models.ongoing || mongoose.model("ongoing", ongSchema);
