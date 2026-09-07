import { useRef, useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import useTilt from '../hooks/useTilt.js'
import { invitation } from '../config/invitation.js'

/**
 * The Journey Mate — a real object she can pick up.
 * Tap the cover and the same book opens: the page takes the cover's
 * place inside the same little 3D book — spine, page edges, shadow
 * and all. Page 1 is the title page (Quissa-ऐ-Safar), page 2 is
 * About the Book, which scrolls inside the page like a real book.
 */
export default function S05Book() {
  const bookRef = useRef(null)
  useTilt(bookRef, { max: 6 })

  // 'closed' → cover · 'p1' → title page · 'p2' → about the book
  const [view, setView] = useState('closed')
  const { pageOne, pageTwo } = invitation.bookInside

  return (
    <section className="section s05" aria-label={invitation.bookTitle}>
      <div className="wrap s05-wrap">
        <Reveal as="p" className="kicker kicker--gold">
          maine ek kitaab likhi hai
        </Reveal>

        {view === 'closed' ? (
          <Reveal y={44} className="s05-book-outer">
            <button
              type="button"
              className="book-btn"
              onClick={() => setView('p1')}
              aria-expanded="false"
              aria-label={`${invitation.bookTitle} kholiye`}
            >
              <div className="book" ref={bookRef}>
                <div className="book-inner">
                  <div className="book-pages" aria-hidden="true" />
                  <div className="book-spine" aria-hidden="true" />
                  {invitation.bookCover ? (
                    <div className="book-cover book-cover--img">
                      <img
                        src={invitation.bookCover}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="book-cover-sheen" aria-hidden="true" />
                    </div>
                  ) : (
                    <div className="book-cover">
                      <span className="book-rule" aria-hidden="true" />
                      <h2 className="book-title">
                        {invitation.bookTitle.split(' ').map((w, i) => (
                          <span key={i}>{w}</span>
                        ))}
                      </h2>
                      <span className="book-rule" aria-hidden="true" />
                      <p className="book-dedication">hamare safar ke baare mein</p>
                    </div>
                  )}
                </div>
                <span className="book-shadow" aria-hidden="true" />
              </div>
              <span className="s05-open-hint">kitaab kholne ke liye chhoo kar dekhiye</span>
            </button>
          </Reveal>
        ) : (
          <div className="s05-open">
            <div className="book book--open">
              <div className="book-inner">
                <div className="book-pages" aria-hidden="true" />
                <div className="book-spine" aria-hidden="true" />
                {view === 'p1' ? (
                  <article className="bookpage" key="p1">
                    <p className="bookpage-no">· 1 ·</p>
                    <div className="bookpage-center">
                      <h3 className="bookpage-title">{pageOne.title}</h3>
                      <span className="bookpage-rule" aria-hidden="true" />
                      <p className="bookpage-tagline">{pageOne.tagline}</p>
                    </div>
                  </article>
                ) : (
                  <article className="bookpage" key="p2">
                    <p className="bookpage-no">· 2 ·</p>
                    <h3 className="bookpage-heading">{pageTwo.title}</h3>
                    <span className="bookpage-rule" aria-hidden="true" />
                    <div className="bookpage-scroll">
                      {pageTwo.stanzas.map((s, i) => (
                        <p key={i}>{s}</p>
                      ))}
                    </div>
                  </article>
                )}
              </div>
              <span className="book-shadow" aria-hidden="true" />
            </div>

            <div className="bookpage-nav">
              <button
                type="button"
                className="bookpage-arrow"
                onClick={() => setView(view === 'p1' ? 'closed' : 'p1')}
                aria-label={view === 'p1' ? 'Cover par wapas jaayein' : 'Pichla panna'}
              >
                ‹
              </button>
              <span className="bookpage-count">{view === 'p1' ? '1 / 2' : '2 / 2'}</span>
              <button
                type="button"
                className="bookpage-arrow"
                onClick={() => setView(view === 'p1' ? 'p2' : 'closed')}
                aria-label={view === 'p1' ? 'Agla panna' : 'Kitaab band karein'}
              >
                {view === 'p1' ? '›' : '×'}
              </button>
            </div>

            <button type="button" className="s05-close" onClick={() => setView('closed')}>
              kitaab band karein
            </button>
          </div>
        )}

        <div className="s05-quote">
          <Reveal as="p" className="lede lede--serif" delay={0.1}>
            {invitation.bookLine1}
          </Reveal>
          <Reveal as="p" className="lede lede--serif s05-em" delay={0.25}>
            {invitation.bookLine2}
          </Reveal>
        </div>

        {invitation.bookStatus && (
          <Reveal as="p" className="s05-status" delay={0.15}>
            {invitation.bookStatus}
          </Reveal>
        )}
      </div>
    </section>
  )
}
