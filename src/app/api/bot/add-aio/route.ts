import { NextResponse } from "next/server";
import mongoDB from "@/database/mongoDB";

// POST request handler for adding messages to AIO
export async function POST(request: Request) {
  try {
    const { shareId, messageIds, token = "" } = await request.json();

    const added = await mongoDB.addAIO(shareId, messageIds);
    if (added) {
      return NextResponse.json(
        { message: "Messages added to AIO" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ error: "AIO not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to add messages to AIO" },
      { status: 500 }
    );
  }
}

// Handle unsupported HTTP methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
