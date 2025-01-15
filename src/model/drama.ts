import mongoose, { Document, Schema } from "mongoose";

export interface Link {
  episodeNumber: number;
  shortUrl: string;
  teleUrl: string;
}

export interface Drama extends Document {
  shareId: number;
  messageIds: number[];
  drama: string;
  detail: string;
  posterUrl: string;
  year: number;
  quality: string;
  rating: string;
  teleDownloadLink: string;
  episodes: Link[];
  sortUrl: string;
}

const linkSchema: Schema<Link> = new Schema({
  episodeNumber: { type: Number, required: true },
  shortUrl: { type: String, required: true },
  teleUrl: { type: String, required: true },
});

const dramaSchema: Schema<Drama> = new Schema({
  shareId: { type: Number, required: true },
  messageIds: { type: [Number], required: true },
  drama: { type: String, required: true },
  detail: { type: String, required: true },
  posterUrl: { type: String, required: true },
  year: { type: Number, required: true },
  quality: { type: String, required: true },
  rating: { type: String, required: true },
  teleDownloadLink: { type: String, required: true },
  episodes: { type: [linkSchema], required: true },
  sortUrl: { type: String, required: true },
});

const Drama =
  (mongoose.models.Drama as mongoose.Model<Drama>) ||
  mongoose.model<Drama>("Drama", dramaSchema);

export default Drama;
