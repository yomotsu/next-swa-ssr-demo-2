import { NextResponse } from 'next/server'

/**
 * Middleware function to handle routing
 * @param {import('next/server').NextRequest} request - The Next.js request object
 * @returns {import('next/server').NextResponse}
 */
export function middleware(request) {
  const healthPath = "/.swa/health.html";

  // const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/sub";
  const basePath = "/sub";

  if (request.nextUrl.pathname === healthPath) {
    const rewrittenUrl = new URL(`${basePath}${healthPath}`, request.url);
    return NextResponse.rewrite(rewrittenUrl);
  }

  return NextResponse.next();
}
