import mongoose, { Document, Schema } from "mongoose";

const movieSchema: Schema<movie> = new Schema({
  shareId: { type: Number, required: true },
  messageIds: { type: [Number], required: true },
  movie: { type: String, required: true },
  title: { type: String, required: true },
  posterUrl: { type: String, required: true },
  year: { type: Number, required: true },
  teleDownloadLink: { type: String, required: true },
  sortUrl: { type: String, required: true },
});

const movie = mongoose.model<movie>("movie", movieSchema);

export default movie;

export interface movie extends Document {
  shareId: number;
  messageIds: number[];
  movie: string;
  title: string;
  posterUrl: string;
  year: number;
  teleDownloadLink: string;
  sortUrl: string;
}
