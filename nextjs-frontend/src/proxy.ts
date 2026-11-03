import { NextResponse, type NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const auth = request.cookies.get('demo-auth');
  if (!auth) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
