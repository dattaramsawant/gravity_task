import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  if (url.pathname === '/') {
    return NextResponse.redirect(new URL('/pokemon', url));
  }
}
