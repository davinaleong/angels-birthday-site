import { RevealOnScroll } from '@/app/components/RevealOnScroll'
import { siteContent, type Section } from '@/lib/content'

/* ─── Sub-components ──────────────────────────────────────────────── */

function Hero() {
  const { hero } = siteContent
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 py-24 text-center">
      <p
        className="font-body text-xs tracking-[0.4em] uppercase mb-6"
        style={{ color: 'var(--gold)' }}
      >
        {hero.eyebrow}
      </p>

      <h1
        className="font-display leading-none uppercase"
        style={{
          fontSize: 'clamp(3.5rem, 15vw, 10rem)',
          color: 'var(--text-primary)',
          lineHeight: 0.95,
        }}
      >
        {hero.headline}
      </h1>

      <div
        className="font-display mt-2"
        style={{
          fontSize: 'clamp(2rem, 8vw, 5.5rem)',
          color: 'var(--gold)',
          lineHeight: 1,
        }}
      >
        {hero.name}
      </div>

      <hr className="gold-rule w-24 mt-8 mb-6" />

      <p
        className="font-body text-sm tracking-[0.25em] uppercase"
        style={{ color: 'rgba(255,248,237,0.55)' }}
      >
        {hero.subtitle}
      </p>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="font-body text-xs tracking-widest uppercase"
          style={{ color: 'rgba(255,248,237,0.3)' }}
        >
          scroll
        </span>
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, rgba(244,198,79,0.5), transparent)' }}
        />
      </div>
    </section>
  )
}

function PunSection({ section }: { section: Section }) {
  const isRetro = section.track === 'retro'

  return (
    <RevealOnScroll>
      <section
        className="relative z-10 px-6 py-16"
        style={{
          background: isRetro
            ? 'linear-gradient(135deg, #3B0F6E 0%, #6A1A50 100%)'
            : 'linear-gradient(135deg, #0A1929 0%, #0F2A3A 100%)',
        }}
      >
        <div className="max-w-2xl mx-auto">
          {/* Track badge */}
          <p
            className="font-body text-xs tracking-[0.35em] uppercase mb-4"
            style={{ color: isRetro ? 'var(--pink)' : 'var(--gold)' }}
          >
            {isRetro ? '♪ Retro Track' : '✦ Training Log'}
          </p>

          {/* Pun headline */}
          <h2
            className="font-display leading-none uppercase mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              color: 'var(--text-primary)',
              lineHeight: 1,
            }}
          >
            {section.pun}
          </h2>

          <hr className="gold-rule w-16 mb-6" />

          {/* Caption */}
          <p
            className="font-body text-base leading-relaxed"
            style={{ color: 'rgba(255,248,237,0.75)' }}
          >
            {section.caption}
          </p>
        </div>
      </section>
    </RevealOnScroll>
  )
}

function VerseCard({ verse }: { verse: Section['verse'] }) {
  return (
    <RevealOnScroll>
      <section className="relative z-10 px-6 py-12">
        <div
          className="max-w-2xl mx-auto rounded-xl p-8"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid rgba(244,198,79,0.15)',
          }}
        >
          <div className="flex items-start gap-4">
            <span
              className="font-display text-3xl leading-none select-none"
              style={{ color: 'var(--gold)', opacity: 0.6 }}
              aria-hidden
            >
              &ldquo;
            </span>
            <div>
              <p
                className="font-body text-base leading-relaxed italic mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {verse.text}
              </p>
              <p
                className="font-body text-xs tracking-[0.25em] uppercase"
                style={{ color: 'var(--gold)' }}
              >
                — {verse.reference}
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealOnScroll>
  )
}

function BirthdayMessage() {
  const { birthdayMessage } = siteContent
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="max-w-xl mx-auto text-center">
        <RevealOnScroll>
          <p
            className="font-body text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: 'var(--gold)' }}
          >
            {birthdayMessage.heading}
          </p>
          <hr className="gold-rule w-16 mx-auto mb-10" />
        </RevealOnScroll>

        {birthdayMessage.lines.map((line, i) => (
          <RevealOnScroll key={i} delay={(i + 1) * 80}>
            <p
              className="font-body text-lg leading-relaxed mb-5"
              style={{ color: 'rgba(255,248,237,0.9)' }}
            >
              {line}
            </p>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}

function Closing() {
  const { closing } = siteContent
  return (
    <footer className="relative z-10 px-6 py-16 text-center">
      <hr className="gold-rule max-w-xs mx-auto mb-8" />
      <p
        className="font-display text-lg tracking-[0.15em] uppercase mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {closing.from}
      </p>
      <p
        className="font-body text-xs tracking-widest"
        style={{ color: 'rgba(255,248,237,0.3)' }}
      >
        {closing.year}
      </p>
    </footer>
  )
}

/* ─── Page ────────────────────────────────────────────────────────── */

export default function BirthdayPage() {
  const { sections } = siteContent

  return (
    <div className="poster-bg min-h-screen">
      <Hero />

      {sections.map((section, i) => (
        <div key={i}>
          <PunSection section={section} />
          <VerseCard verse={section.verse} />
        </div>
      ))}

      <BirthdayMessage />
      <Closing />
    </div>
  )
}
