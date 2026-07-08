'use client'

import { useActionState, useRef, useEffect } from 'react'
import { checkPassphrase } from '@/app/actions/auth'

export default function GatePage() {
  const [state, action, pending] = useActionState(checkPassphrase, { error: null })
  const formRef = useRef<HTMLFormElement>(null)

  // Shake the form on error
  useEffect(() => {
    if (state?.error && formRef.current) {
      formRef.current.classList.remove('shake')
      void formRef.current.offsetWidth // reflow to restart animation
      formRef.current.classList.add('shake')
    }
  }, [state?.error])

  return (
    <main className="poster-bg min-h-screen flex items-center justify-center p-6">
      <div className="relative z-10 w-full max-w-sm">

        {/* Ticket stub header */}
        <div className="text-center mb-8">
          <p
            className="font-display text-xs tracking-[0.35em] uppercase mb-3"
            style={{ color: 'var(--gold)' }}
          >
            Backstage Access
          </p>
          <h1
            className="font-display text-5xl uppercase leading-none"
            style={{ color: 'var(--text-primary)' }}
          >
            ADMIT
            <br />
            ONE
          </h1>
          <div className="gold-rule mt-5 mb-5" />
          <p className="font-body text-sm" style={{ color: 'rgba(255,248,237,0.55)' }}>
            Enter the passphrase to continue
          </p>
        </div>

        {/* Ticket body */}
        <div
          className="rounded-2xl border p-8"
          style={{
            background: 'var(--card-bg)',
            borderColor: 'rgba(244,198,79,0.25)',
          }}
        >
          {/* Perforation line */}
          <div
            className="flex items-center gap-1 mb-6 opacity-30"
            aria-hidden
          >
            {Array.from({ length: 22 }).map((_, i) => (
              <div
                key={i}
                className="h-px flex-1"
                style={{ background: 'var(--gold)' }}
              />
            ))}
          </div>

          <form ref={formRef} action={action} className="flex flex-col gap-4">
            <label className="sr-only" htmlFor="passphrase">
              Passphrase
            </label>
            <input
              id="passphrase"
              name="passphrase"
              type="password"
              autoComplete="off"
              placeholder="Your passphrase…"
              required
              className="w-full rounded-lg px-4 py-3 text-base outline-none focus:ring-2 font-body"
              style={{
                background: 'rgba(255,248,237,0.07)',
                color: 'var(--text-primary)',
                border: '1px solid rgba(244,198,79,0.3)',
                caretColor: 'var(--gold)',
                // @ts-expect-error -- CSS custom property for focus ring
                '--tw-ring-color': 'var(--gold)',
              }}
            />

            {state?.error && (
              <p
                className="text-sm font-body text-center"
                style={{ color: 'var(--pink)' }}
                role="alert"
              >
                {state.error}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full rounded-lg py-3 font-display text-sm tracking-[0.2em] uppercase transition-opacity disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              style={{
                background: 'var(--gold)',
                color: 'var(--card-bg)',
              }}
            >
              {pending ? 'Checking…' : 'Enter'}
            </button>
          </form>
        </div>

        {/* Ticket footer */}
        <p
          className="text-center mt-6 text-xs font-body tracking-wider uppercase"
          style={{ color: 'rgba(255,248,237,0.25)' }}
        >
          2026 · Angel Vaishilee · Birthday Show
        </p>
      </div>
    </main>
  )
}
