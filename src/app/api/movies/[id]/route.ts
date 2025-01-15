import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Movie from "@/model/movie";
import { connect } from "@/lib/dbConfig";
import { asyncError } from "@/middleware/error";

export const GET = asyncError(
  async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ): Promise<NextResponse> => {
    await connect();
    const movie = await Movie.findById(params.id);
    if (!movie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }
    return NextResponse.json(movie);
  }
);

export const PUT = asyncError(
  async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ): Promise<NextResponse> => {
    await connect();
    const data = await req.json();
    const updatedMovie = await Movie.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    if (!updatedMovie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }
    return NextResponse.json(updatedMovie);
  }
);

export const DELETE = asyncError(
  async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ): Promise<NextResponse> => {
    await connect();
    const deletedMovie = await Movie.findByIdAndDelete(params.id);
    if (!deletedMovie) {
      return NextResponse.json({ error: "Movie not found" }, { status: 404 });
    }
    return NextResponse.json(deletedMovie);
  }
);
