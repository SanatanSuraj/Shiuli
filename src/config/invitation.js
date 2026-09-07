// ─────────────────────────────────────────────────────────────
//  Everything you may want to change lives in this one file.
//  Edit the values, save, and the whole site updates.
// ─────────────────────────────────────────────────────────────

export const invitation = {
  // Her name, exactly as you want it to appear
  herName: 'Shiuli Rani',

  // The invitation details
  day: 'Tuesday',
  date: '8ptember',        // e.g. '8ptember'
  time: 'Subah 10:30 baje',       // e.g. 'Subah 10:30 baje' or '7:00 PM'
  location: 'My Room',

  // Her photograph — shown in the opening (hero) section
  heroPhoto: '/shiuli.jpeg',

  // The two of you — shown in the realization section
  usPhoto: '/us.jpeg',

  // Shared moments — the scattered snapshots after the stillness section.
  // Each entry: photo path + which part of it the frame keeps (focus)
  moments: [
    { src: '/lamha-1.jpeg', focus: '50% 32%' },
    { src: '/lamha-2.jpeg', focus: '50% 36%' },
    { src: '/lamha-3.jpeg', focus: '50% 38%' },
    { src: '/lamha-4.jpeg', focus: '50% 40%' },
    { src: '/lamha-5.jpeg', focus: '50% 45%' },
  ],

  // Spare slot: put a file at public/my-photo.jpg to use it anywhere
  photo: '/my-photo.jpg',

  // The book and the sealed poem
  bookTitle: 'The Journey Mate',
  bookCover: '/book-cover.jpeg', // set to null to use the typographic cover
  bookLine1: 'Some journeys are not about reaching somewhere.',
  bookLine2: 'Some are about who makes you want to keep walking.',
  bookStatus: 'Kitaab likhi ja chuki hai · in dino panno ki editing chal rahi hai',

  // Inside the book — she can open it and turn the pages
  bookInside: {
    pageOne: {
      title: 'Quissa-ऐ-Safar',
      tagline: 'Because journeys may end, but memories remain, becoming a story.',
    },
    pageTwo: {
      title: 'About the Book',
      stanzas: [
        "This isn't a love story.\nAt least, not only a love story.",
        "It's a story about moments—\nthe ones we never planned,\nthe ones that lasted only a few minutes,\nand somehow stayed with us forever.",
        "It's about strangers who crossed our paths,\nonly to become memories we carried long after they left.",
        "It's about train journeys that were meant to take us somewhere,\nbut ended up taking us somewhere within ourselves.",
        'About conversations that continued in our minds\nlong after the voices had fallen silent.',
        'About parents, dreams, failures, laughter, loneliness,\ngoodbyes, first love, heartbreak,\nand the quiet process of finding ourselves along the way.',
        'Every chapter is a different journey.\nEvery journey begins with a destination,\nbut not every journey is about reaching it.',
        'Some journeys give us people.\nSome give us memories.\nSome leave us with questions.\nSome leave us with scars.\nAnd some quietly change who we are.',
        'Because sometimes,\nthe person sitting beside you for a few hours\ncan leave a mark that lasts a lifetime.',
        "And sometimes, the journey ends,\nbut the story doesn't.",
        'Every chapter is a journey.\nEvery journey leaves something behind.\nA memory. A feeling. A lesson.',
        'And perhaps,\nthat is what this book is really about—\nthe journeys we took,\nthe people we met,\nand the pieces of ourselves we found along the way.',
      ],
    },
  },
  poemTitle: 'The Night and the Sun',

  // How the letter is signed at the very end
  signature: '— from someone who learned to pause because of you.',
}
