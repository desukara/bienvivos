import { NextRequest, NextResponse } from "next/server";

const EASTOKYO_HOSTS = new Set(["eastokyo.com", "www.eastokyo.com"]);
const BIENVIVOS_HOSTS = new Set(["bienvivos.com", "www.bienvivos.com"]);

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const { pathname } = request.nextUrl;

  if (EASTOKYO_HOSTS.has(host)) {
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = "/eastokyo";
      return NextResponse.rewrite(url);
    }

    if (pathname === "/eastokyo" || pathname === "/eastokyo/") {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url, 308);
    }
  }

  if (BIENVIVOS_HOSTS.has(host) && (pathname === "/eastokyo" || pathname === "/eastokyo/")) {
    const url = request.nextUrl.clone();
    url.protocol = "https";
    url.host = "www.eastokyo.com";
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|opengraph-image).*)"],
};
