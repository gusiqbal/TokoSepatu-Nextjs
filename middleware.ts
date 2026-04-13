import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse | void {
    const token = request.cookies.get("token")?.value;

    const isProtectedRoute =
        request.nextUrl.pathname.startsWith("/account") ||
        request.nextUrl.pathname.startsWith("/orders");

    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
