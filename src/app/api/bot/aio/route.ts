import { NextRequest, NextResponse } from "next/server";
import mongoDB from "@/database/mongoDB";
import { asyncError } from "@/middleware/error";
import { connect } from "@/lib/dbConfig";

export const POST = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();

    const url = new URL(req.url);
    const path = url.pathname;
    console.log(path);
    if (path.endsWith("/save")) {
      const aioData = await req.json();
      try {
        await mongoDB.saveAIO(aioData);
        return NextResponse.json(
          { message: "AIO saved successfully" },
          { status: 200 }
        );
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to save AIO: " + error?.toString() },
          { status: 500 }
        );
      }
    } else if (path.endsWith("/search")) {
      const criteria = await req.json();
      try {
        const results = await mongoDB.searchAIO(criteria);
        return NextResponse.json(results, { status: 200 });
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to search AIO: " + error?.toString() },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { error: "Invalid POST request path" },
      { status: 404 }
    );
  }
);

export const DELETE = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();

    const { shareId } = await req.json();
    try {
      const deleted = await mongoDB.deleteAIO(shareId);
      if (deleted) {
        return NextResponse.json({ message: "AIO deleted" }, { status: 200 });
      } else {
        return NextResponse.json({ error: "AIO not found" }, { status: 404 });
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to delete AIO" },
        { status: 500 }
      );
    }
  }
);

export const PATCH = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();

    const { shareId, updateData } = await req.json();
    try {
      const result = await mongoDB.updateAIOAttribute(shareId, updateData);
      return NextResponse.json(
        { message: "AIO updated successfully", result },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to update AIO" },
        { status: 500 }
      );
    }
  }
);

// export const GET = asyncError(
//   async (req: NextRequest): Promise<NextResponse> => {
//     const { searchParams } = new URL(req.url);
//     const shareId = searchParams.get("shareId");
//     try {
//       const messages = await mongoDB.getAIOMessages(Number(shareId));
//       return NextResponse.json(messages, { status: 200 });
//     } catch (error) {
//       return NextResponse.json(
//         { error: "Failed to retrieve AIO messages" },
//         { status: 500 }
//       );
//     }
//   }
// );
export const GET = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();
    console.log(req);
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type") as
      | "Anime"
      | "Movie"
      | "Drama"
      | "Series"
      | "Manga"
      | "Other";
    const pageSize = 20;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const genre = (searchParams.get("genre") as string) || "all";
    if (!type) {
      return NextResponse.json(
        { error: "Type parameter is required" },
        { status: 400 }
      );
    }

    const results = await mongoDB.getAllAIOPaginated(
      page,
      pageSize,
      "Movie",
      genre
    );
    return NextResponse.json(results, { status: 200 });
  }
);
