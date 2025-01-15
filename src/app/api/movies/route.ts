import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/dbConfig";
import Movie from "@/model/movie";
import { asyncError } from "@/middleware/error";

// GET request handler for fetching all movies
export const GET = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();
    const movies = await Movie.find(); // Fetch all movies from the database
    return NextResponse.json(movies); // Return the list of movies as JSON
  }
);

// POST request handler for creating a new movie
export const POST = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();
    const {
      shareId,
      messageIds,
      movie,
      title,
      posterUrl,
      year,
      teleDownloadLink,
      sortUrl,
    } = await req.json();
    const newMovie = new Movie({
      shareId,
      messageIds,
      movie,
      title,
      posterUrl,
      year,
      teleDownloadLink,
      sortUrl,
    });

    await newMovie.save();

    return NextResponse.json(newMovie, { status: 201 });
  }
);
