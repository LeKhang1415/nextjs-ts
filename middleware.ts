import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: { url: string | URL | undefined }) {
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher: ["/about/:path*", "/tours/:path*"],
};
