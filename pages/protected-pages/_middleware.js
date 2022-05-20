import { withEdgeMiddlewareAuth } from "@clerk/nextjs/edge-middleware";
import { NextResponse } from "next/server";

export default withEdgeMiddlewareAuth((request) => {
  const { sessionId, userId } = request.auth;

  console.log("request", request);
  console.log("request.auth", request.auth);
  console.log("sessionId", sessionId);

  if (!sessionId) {
    const destination = request.nextUrl.href;
    const url = request.nextUrl.clone();
    url.pathname = "/sign-in";
    url.searchParams.set("redirect_url", destination);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});
