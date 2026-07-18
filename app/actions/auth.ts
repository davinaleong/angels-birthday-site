'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export type AuthState = { error: string | null }

export async function checkPassphrase(
  _prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  const passphrase = formData.get('passphrase')
  const expected = process.env.SITE_PASSPHRASE?.trim()

  if (!expected) {
    return { error: 'Site is not yet configured — come back soon.' }
  }

  if (typeof passphrase !== 'string' || passphrase.trim() !== expected) {
    return { error: 'Wrong passphrase — try again.' }
  }

  const cookieStore = await cookies()
  cookieStore.set('auth', '1', {
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    secure: process.env.NODE_ENV === 'production',
  })

  redirect('/')
}
