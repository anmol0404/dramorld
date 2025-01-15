import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(pathname + "wokring");
  // if (
  //   pathname.startsWith("/api/aio") ||
  //   pathname.startsWith("/api/secret") ||
  //   pathname.startsWith("/api/secret")
  // ) {
  //   const token = request.headers.get("authorization");

  //   // if (token !== "your-secret-token") {
  //   return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  //   // }
  // }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
