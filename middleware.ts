import { NextRequest, NextResponse } from 'next/server';
import { publicRoutes, protectedRoutes } from './middleware/routes';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuthenticated = req.cookies.get('auth-token'); // Assuming you store auth state in cookies

  // Allow requests to public routes
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users from protected routes to login
  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow access to protected routes for authenticated users
  return NextResponse.next();
}
