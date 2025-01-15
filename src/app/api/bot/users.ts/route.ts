import { NextRequest, NextResponse } from "next/server";
import mongoDB from "@/database/mongoDB";
import { asyncError } from "@/middleware/error";
import { connect } from "@/lib/dbConfig";

export const GET = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();
    const path = req.nextUrl.pathname;
    const userId = req.nextUrl.searchParams.get("userId");

    try {
      if (path.endsWith("/countUsers")) {
        const count = await mongoDB.countUsers();
        return NextResponse.json({ count }, { status: 200 });
      }
      if (path.endsWith("/getUserIds")) {
        const userIds = await mongoDB.getAllUserIds();
        return NextResponse.json(userIds, { status: 200 });
      }
      if (path.endsWith("/isUserExist") && userId) {
        const userExists = await mongoDB.isUserExist(userId);
        return NextResponse.json({ exists: userExists }, { status: 200 });
      }
      return NextResponse.json(
        { error: "Invalid GET request path or missing parameters" },
        { status: 400 }
      );
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to process GET request" },
        { status: 500 }
      );
    }
  }
);

export const POST = asyncError(
  async (req: NextRequest): Promise<NextResponse> => {
    await connect();

    if (req.nextUrl.pathname.endsWith("/saveUser")) {
      const user = await req.json();
      try {
        await mongoDB.saveUser(user);
        return NextResponse.json({ message: "User saved" }, { status: 200 });
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to save user" },
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
