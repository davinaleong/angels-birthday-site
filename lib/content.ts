export type VerseContent = {
  reference: string
  text: string
}

export type Section = {
  track: 'retro' | 'gym'
  pun: string
  caption: string
  verse: VerseContent
}

export const siteContent = {
  hero: {
    eyebrow: 'A gift for',
    headline: 'HAPPY BIRTHDAY',
    name: 'ANGEL VAISHILEE',
    subtitle: 'Singer · Songwriter · Emcee · Champion',
  },

  sections: [
    {
      track: 'retro',
      pun: '...ANGEL ONE MORE TIME',
      caption:
        'From her very first competition at 7 to becoming Asia\'s first female Singing Champion — she keeps showing up, again and again, every time more breathtaking than the last.',
      verse: {
        reference: 'Psalm 96:1',
        text: 'Sing to the Lord a new song; sing to the Lord, all the earth.',
      },
    },
    {
      track: 'gym',
      pun: 'THE NIGHTIN-GAINS',
      caption:
        'The same discipline that builds strength in the gym builds power on the stage. She trains both — and you can hear it in every note she holds.',
      verse: {
        reference: 'Philippians 4:13',
        text: 'I can do all this through him who gives me strength.',
      },
    },
    {
      track: 'retro',
      pun: 'SINCE U BEEN GONE (SOLO)',
      caption:
        '"Voice Reawakened" wasn\'t just a comeback show — it was a declaration. Six musicals. One champion. A whole career of moments that move people to their feet.',
      verse: {
        reference: 'Zephaniah 3:17',
        text: 'The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.',
      },
    },
    {
      track: 'gym',
      pun: 'SPARRING SESSIONS & SCALES',
      caption:
        'Muay Thai demands you show up with your whole self — so does the stage. She does both, with her whole heart, and it shows.',
      verse: {
        reference: 'Isaiah 40:31',
        text: 'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
      },
    },
  ] satisfies Section[],

  birthdayMessage: {
    heading: 'A NOTE FOR YOU',
    lines: [
      'Angel — watching you perform is watching someone fully alive in their calling.',
      'The way you carry a room, hold a note, and carry your faith says everything about who you are.',
      'From your first stage at 7 to everything that\'s come since — every role, every competition, every comeback — it has been an extraordinary journey to witness.',
      'Here\'s to another year of new songs, new stages, and all the joy God has written ahead for you.',
      'Happy birthday.',
    ],
  },

  closing: {
    from: 'With love, from a friend',
    year: '2026',
  },
}
