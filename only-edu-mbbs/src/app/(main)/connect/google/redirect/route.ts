import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const config = {
  maxAge: 60 * 60 * 24 * 7, // 1 week
  path: "/",
  domain: process.env.API_URL ?? "localhost",
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
};

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const idToken = searchParams.get("id_token");
  const accessToken = searchParams.get("access_token");

  if (!idToken || !accessToken) {
    return NextResponse.json(
      {
        error:
          "Missing id_token or access_token parameter please go back to application and try again later",
      },
      { status: 400 }
    );
  }
  if (!idToken) return NextResponse.redirect(new URL("/", request.url));

  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://admin.onlyeducation.co.in";
  const path = "/api/auth/google/callback";

  const url = new URL(backendUrl + path);
  url.searchParams.append("id_token", idToken);
  url.searchParams.append("access_token", accessToken);
  const res = await fetch(url.href);
  const data = await res.json();
  cookies().set("_jwt", data.jwt, config);
  return NextResponse.redirect(new URL("/", request.url));
}
