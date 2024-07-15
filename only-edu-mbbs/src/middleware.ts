import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Set a cookie
  response.cookies.set("myCookieName", "myCookieValue", {
    httpOnly: true, // Prevent client-side JavaScript access
    secure: process.env.NODE_ENV !== "development", // Only send over HTTPS in production
    maxAge: 60 * 60 * 24 * 7, // Cookie expires in 1 week (seconds)
    path: "/", // Cookie accessible on the entire domain
    sameSite: "strict", // Prevent CSRF attacks
  });

  return response;
}

// Specify the paths where this middleware should run
export const config = {
  matcher: ["/"], // Run on all routes (adjust as needed)
};
