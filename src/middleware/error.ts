import { NextRequest, NextResponse } from "next/server";

export const errorHandler = (
  statusCode: number = 500,
  message: string = "Internal Server Error"
) => {
  return NextResponse.json(
    {
      success: false,
      message,
    },
    {
      status: statusCode,
    }
  );
};

export const asyncError = (
  passedFunc: (req: NextRequest, ...args: any[]) => Promise<NextResponse>
) => {
  return async (req: NextRequest, ...args: any[]): Promise<NextResponse> => {
    try {
      return await passedFunc(req, ...args);
    } catch (err: any) {
      console.error("Error occurred:", err);
      return errorHandler(500, err.message || "An error occurred");
    }
  };
};
