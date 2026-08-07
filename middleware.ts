import { NextRequest, NextResponse } from "next/server";

const EASTOKYO_HOSTS = new Set(["eastokyo.com", "www.eastokyo.com"]);

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const { pathname } = request.nextUrl;

  if (EASTOKYO_HOSTS.has(host) && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/eastokyo";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|opengraph-image).*)"],
};
