import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const auth = request.cookies.get('auth')
  if (auth?.value !== '1') {
    return NextResponse.redirect(new URL('/gate', request.url))
  }
  return NextResponse.next()
}

export const config = {
  // Protect everything except the gate page, Next.js internals, and public assets
  matcher: ['/((?!gate|_next/static|_next/image|favicon\\.ico).*)'],
}
