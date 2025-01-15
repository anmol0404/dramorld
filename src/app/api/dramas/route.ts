import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/dbConfig";
import Drama from "@/model/drama";
import { asyncError } from "@/middleware/error";

export const GET = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();
    const dramas = await Drama.find();
    return NextResponse.json(dramas);
  }
);

export const POST = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();
    const {
      shareId,
      messageIds,
      drama,
      detail,
      posterUrl,
      year,
      quality,
      rating,
      teleDownloadLink,
      episodes = [
        {
          episodeNumber: 1,
          shortUrl: "http://default.short.url/ep1",
          teleUrl: "http://default.tele.url/ep1",
        },
      ],
      sortUrl,
    } = await req.json();
    const newDrama = new Drama({
      shareId,
      messageIds,
      drama,
      detail,
      posterUrl,
      year,
      quality,
      rating,
      teleDownloadLink,
      episodes,
      sortUrl,
    });
    await newDrama.save();
    return NextResponse.json(newDrama, { status: 201 });
  }
);
