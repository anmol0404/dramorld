import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import Drama from "@/model/drama";
import { connect } from "@/lib/dbConfig";
import { asyncError } from "@/middleware/error";

export const GET = asyncError(
  async (
    req: NextRequest,
    { params }: { params: { id: number } }
  ): Promise<NextResponse> => {
    await connect();
    const drama = await Drama.find({ shareId: params.id });
    if (!drama) {
      return NextResponse.json({ error: "Drama not found" }, { status: 404 });
    }
    return NextResponse.json(drama);
  }
);

export const PUT = asyncError(
  async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ): Promise<NextResponse> => {
    await connect();
    const data = await req.json();
    const updatedDrama = await Drama.findByIdAndUpdate(params.id, data, {
      new: true,
    });
    if (!updatedDrama) {
      return NextResponse.json({ error: "Drama not found" }, { status: 404 });
    }
    return NextResponse.json(updatedDrama);
  }
);

export const DELETE = asyncError(
  async (
    req: NextRequest,
    { params }: { params: { id: string } }
  ): Promise<NextResponse> => {
    await connect();
    const deletedDrama = await Drama.findByIdAndDelete(params.id);
    if (!deletedDrama) {
      return NextResponse.json({ error: "Drama not found" }, { status: 404 });
    }
    return NextResponse.json(deletedDrama);
  }
);
