import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// Renamed from 'middleware' to 'proxy' for Next.js 16
export function proxy(request: NextRequest) {
  // REMOVED: return NextResponse.redirect(new URL('/home', request.url))
  
  // For now, just let the request continue to the intended page
  return NextResponse.next()
}
 
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}