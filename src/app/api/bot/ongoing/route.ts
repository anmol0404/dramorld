// app/api/ongoing/route.ts
import { NextRequest, NextResponse } from "next/server";
import mongoDB from "@/database/mongoDB";
import { asyncError } from "@/middleware/error";
import { connect } from "@/lib/dbConfig";

export const POST = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();

    const url = new URL(req.url);
    const path = url.pathname;

    if (path.endsWith("/save")) {
      const ongoingData = await req.json();
      try {
        await mongoDB.saveOngoing(ongoingData);
        return NextResponse.json(
          { message: "Ongoing data saved successfully" },
          { status: 200 }
        );
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to save ongoing data: " + error },
          { status: 500 }
        );
      }
    } else if (path.endsWith("/search")) {
      const { title } = await req.json();
      try {
        const results = await mongoDB.searchOngoing({ title });
        return NextResponse.json(results, { status: 200 });
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to search ongoing data: " + error },
          { status: 500 }
        );
      }
    }

    // Handle invalid paths
    return NextResponse.json(
      { error: "Invalid POST request path" },
      { status: 404 }
    );
  }
);
