import { NextRequest, NextResponse } from "next/server";
import mongoDB from "@/database/mongoDB";
import { asyncError } from "@/middleware/error";
import { connect } from "@/lib/dbConfig";

export const POST = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();
    const criteria = await req.json();
    console.log(req);
    const results = await mongoDB.searchAIO(criteria);
    console.log(results);

    return NextResponse.json(results, { status: 200 });
  }
);
