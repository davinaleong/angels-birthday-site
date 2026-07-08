# Birthday Microsite — Angel Vaishilee
### Design Document v2 (Finalized Direction)

---

## 1. Subject Profile (for design context)

- **Name:** Angel Vaishilee
- **Role:** Singer & songwriter, genre blender, host/emcee (Asia-wide)
- **Background:** Singaporean Indian, studied at University of Manchester
- **Career highlights:**
  - First competition at age 7, first musical at 13
  - 2016 — first Asian female champion in an international singing competition (Asia Singing Champion)
  - 6+ musicals to date
  - Known for retro/soul covers (e.g. Mariah Carey tribute), global mashups, contemporary hits, and Tamil song covers
  - Recently did a "Voice Reawakened" comeback show — strong personal narrative of return/resilience
- **Personal:** Christian faith is central to her life
- **Tone of her artistry:** soulful, nostalgic, resilient, passionate

This is a **surprise/celebration site from a friend**, not a press kit — tone should feel warm and personal.

---

## 2. Confirmed Direction: C — "Studio Session" (Minimal Retro Poster)

Bold, graphic, vintage concert-poster energy. Punchy rather than moody.

**Palette**
| Role | Color | Notes |
|---|---|---|
| Background gradient | `#2B1447` → `#7A1E4A` (indigo → magenta) | poster gradient, diagonal or radial |
| Primary text | `#FFF8ED` warm off-white | high contrast against gradient |
| Accent | `#F4C64F` gold | for CTA, dividers, verse callout |
| Secondary accent | `#FF6F91` hot pink/rose | small highlights, hover states |
| Card background | `#1C0E2E` deep plum | for content cards over the gradient |

**Typography**
- Display headings: oversized condensed/bold display face — treat "HAPPY BIRTHDAY ANGEL" like an album title (e.g. "Anton", "Bebas Neue", or "Archivo Black")
- Body: clean sans (e.g. "Inter" or "Manrope")
- Grain/texture overlay on the gradient background for a printed-poster feel (subtle, low opacity)

**Signature visual motifs**
- Big bold typographic hero, poster-style
- Achievements/journey shown as a grid of "tour poster" cards (not a timeline scroll)
- Sharp geometric dividers or starburst accents, concert-flyer style
- No audio/video — fully visual, so photography and typography carry the design

---

## 3. Site Structure (single page, scroll-based)

The page is built from **intersecting pun sections** — each pun section has its own themed background, followed immediately by a Bible verse card that thematically anchors it. Two pun "tracks" alternate down the page: **Retro Song Track** (secular, lyric-based puns) and **Gym/Muay Thai Track** (nightingale + gym-animal puns). The verses themselves are never punned — they're placed straight, quiet, and dignified, purely as an anchor.

1. **Passphrase Gate** ("Backstage Pass" entry screen)
   - Framed like a ticket stub / backstage door, styled with the poster palette
   - Single passphrase input, soft error shake on wrong entry
   - Passphrase sourced from `.env` (see §5) — not hardcoded in the repo

2. **Hero**
   - "Happy Birthday, Angel" as a poster headline
   - Subtitle: brief line on her as performer/songwriter

3. **Intersecting Pun Sections** (repeat pattern 3–4 times, alternating tracks)

   **Track A — Retro Song Pun** (secular lyric wordplay, poster-card bg themed to that song's era/mood)
   - Draft pun directions to choose from (all riff on song titles/lyrics, none on the verses):
     - *"...Angel One More Time"* (Britney — "...Baby One More Time")
     - *"Since U Been Gone (Solo)"* (Kelly Clarkson) — nods to her comeback
     - *"Bye Bye (Stage Fright)"* (NSYNC — "Bye Bye Bye")
     - *"No Scrubs, Just Standing Ovations"* (TLC — "No Scrubs")
     - *"Genie in a Vocal Bottle"* (Christina Aguilera)
   - Each card: pun headline + a short caption about her singing journey/style, on a background treated in that track's color mood (e.g. Y2K gradient, CD-sheen texture)
   - **Paired verse (sing-themed, placed straight, no pun):**
     - *Psalm 96:1* — "Sing to the Lord a new song"
     - *Psalm 33:3* — "Sing to him a new song; play skillfully, and shout for joy"
     - *Zephaniah 3:17* — "He will rejoice over you with singing"
     - *Ephesians 5:19* — singing psalms and hymns, making music from the heart
     - *Psalm 100:2* — "Serve the Lord with gladness; come before him with joyful songs"

   **Track B — Gym / Muay Thai Pun** (nightingale + gym-animal wordplay, poster-card bg themed to strength/training)
   - Draft pun directions to choose from:
     - *"The Nightin-GAINS"* (nightingale + gym "gains")
     - *"Muay Thai-ger Energy"* (Muay Thai + tiger, a common gym/training mascot)
     - *"Sparring Sessions & Scales"* (boxing/Muay Thai sparring + vocal scales)
     - *"Iron Sharpens Iron (& Vocal Cords)"*
     - *"Fight Song, Literally"*
   - Each card: pun headline + short caption tying her training discipline to her stage discipline
   - **Paired verse (strength/discipline-themed, placed straight, no pun):**
     - *Isaiah 40:31* — "those who hope in the Lord will renew their strength... they will soar on wings like eagles" *(nice bridge verse — bird + strength, ties both tracks together if you want one section to feel like the "crossover")*
     - *Philippians 4:13* — "I can do all things through him who strengthens me"
     - *Psalm 18:34* — "He trains my hands for battle"
     - *1 Corinthians 9:24–27* — running the race, disciplined training
     - *2 Timothy 4:7* — "I have fought the good fight"

   > Recommend: 2 Track A sections + 2 Track B sections, alternating (A → B → A → B), so it reads as a rhythm rather than two separate lists. If you want one single "crossover" moment, use *Isaiah 40:31* as the final verse of the sequence since it naturally ties singing (soaring, wings) and strength (renewed strength) together — still placed straight, not punned.

4. **Birthday Message**
   - The core personal message from you
   - Could reveal with a poster "unveil"/reveal-on-scroll animation

5. **Closing / Signature**
   - Simple sign-off, maybe styled like a poster's small print/credits line
   - No footer clutter

---

## 4. Interaction & Motion Notes

- Motion stays purposeful: reveal-on-scroll for hero/message, subtle card hover-lift on the journey grid
- Respect `prefers-reduced-motion`
- Design for mobile-first reading (most friends will open this on their phone)

---

## 5. Technical Notes (for build phase)

- **Framework:** Next.js (App Router)
- **Access control:** passphrase-gated
  - Passphrase stored as an environment variable (e.g. `SITE_PASSPHRASE` in `.env.local`), never committed to the repo
  - Server-side check via a route handler, setting a signed/httpOnly cookie on success — not a client-side `if` check
  - `.env.example` committed with a placeholder so the real value stays private
- **Content:** hardcoded in a local data file (no CMS needed for a one-off gift site)
- **Hosting:** Vercel (set `SITE_PASSPHRASE` as an environment variable in project settings, not in the repo)
- **Assets needed from you:**
  - 4–6 photos of Angel (performance + candid), sized for poster-card treatment
  - Final birthday message text
  - Confirmed Bible verse (see options in §3.5)
  - The actual passphrase value (goes in `.env.local` / Vercel env settings)

---

## 6. Status: Ready to Build

All open decisions confirmed:
- [x] Direction: **C — Studio Session**
- [x] Visual only, no audio/video
- [x] Structure: intersecting pun sections (Retro Song Track + Gym/Muay Thai Track), each paired with a straight, un-punned Bible verse as anchor
- [x] Passphrase via `.env` (not hardcoded)

Remaining before build:
- Pick final puns for each section (drafts provided in §3, or write your own)
- Pick final verses for each section (drafts provided in §3)
- Confirm the passphrase value + photos/message text