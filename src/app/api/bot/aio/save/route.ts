import { NextRequest, NextResponse } from "next/server";
import mongoDB from "@/database/mongoDB";
import { asyncError } from "@/middleware/error";
import { connect } from "@/lib/dbConfig";

export const POST = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();
    const aioData = await req.json();
    await mongoDB.saveAIO(aioData);
    return NextResponse.json(
      { message: "AIO saved successfully" },
      { status: 200 }
    );
  }
);
