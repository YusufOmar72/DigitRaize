import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Block test pages in production
  if (process.env.NODE_ENV === 'production') {
    const testPages = ['/favicon-test', '/icon-test', '/preview-emails', '/blob-picker'];
    const pathname = request.nextUrl.pathname;
    
    if (testPages.some(page => pathname.startsWith(page))) {
      return new NextResponse(null, { status: 404 });
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/favicon-test/:path*', '/icon-test/:path*', '/preview-emails/:path*', '/blob-picker/:path*'],
};

