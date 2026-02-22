import { useState } from 'react'
import manirajaPhoto from '../assets/maniraja-about.jpg'
import { ACHIEVEMENTS, CAREER, EDUCATION, SITE, SKILLS } from '../data/content'
import { useReveal, useRevealStagger } from '../hooks'
import { en } from '../locales/en'

const t = en.about

export function About() {
  return (
    <main className="pt-20">
      <PageHeader />
      <BioSection />
      <SkillsSection />
      <CareerSection />
      <EducationSection />
      <AchievementsSection />
    </main>
  )
}

function PageHeader() {
  return (
    <section className="bg-blush py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="hero-enter text-xs font-medium uppercase tracking-[0.2em] text-amber mb-4"
          style={{ animationDelay: '0.05s' }}
        >
          {t.header.eyebrow}
        </p>
        <h1
          className="hero-enter text-5xl sm:text-6xl font-bold text-navy leading-tight mb-6"
          style={{ animationDelay: '0.2s' }}
        >
          {t.header.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <p
          className="hero-enter text-lg text-navy/75 max-w-xl leading-relaxed"
          style={{ animationDelay: '0.35s' }}
        >
          {t.header.subtitle}
        </p>
      </div>
    </section>
  )
}

function BioSection() {
  const imageRef = useReveal()
  const textRef = useReveal()

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div ref={imageRef} className="reveal-left relative">
            <img
              src={manirajaPhoto}
              alt="Maniraja A — React Engineer"
              className="w-full rounded-3xl shadow-lg"
            />
            {/* dims the photo without a separate image edit */}
            <div className="absolute inset-0 rounded-3xl bg-black/40 pointer-events-none" />
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl border-2 border-amber -z-10 pointer-events-none" />
            <div
              className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-aqua/30 -z-10 pointer-events-none"
              style={{ filter: 'blur(30px)' }}
            />
          </div>

          <div
            ref={textRef}
            className="reveal flex flex-col gap-6 text-navy/80 leading-relaxed"
            style={{ transitionDelay: '0.15s' }}
          >
            <h2 className="text-2xl font-bold text-navy">{t.bio.greeting}</h2>
            <p>{t.bio.p1}</p>
            <p>{t.bio.p2}</p>
            <p>{t.bio.p3}</p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              {[
                { label: t.bio.facts.role, value: `Senior Consultant @ ${SITE.company}` },
                { label: t.bio.facts.location, value: SITE.location },
                { label: t.bio.facts.email, value: SITE.email, href: `mailto:${SITE.email}` },
                {
                  label: t.bio.facts.phone,
                  value: SITE.phone,
                  href: `tel:${SITE.phone.replace(/\s/g, '')}`,
                },
                { label: t.bio.facts.linkedin, value: 'A-Maniraja', href: SITE.linkedin },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p className="text-[10px] uppercase tracking-widest text-navy/45 mb-1">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="text-sm text-forest font-medium hover:text-amber transition-colors break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-navy font-medium">{value}</p>
                  )}
                </div>
              ))}
            </div>

            <a
              href="/Maniraja_Resume.pdf"
              download="Maniraja_A_Resume.pdf"
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-blush text-sm font-medium hover:bg-forest transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 shrink-0"
                aria-hidden="true"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              {t.bio.downloadResume}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const headerRef = useReveal()
  const rowsRef = useRevealStagger(90)

  return (
    <section className="py-24 sm:py-32 bg-mint">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber mb-3">
            {t.skills.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t.skills.title}</h2>
        </div>

        <div ref={rowsRef} className="flex flex-col gap-8">
          {SKILLS.map(({ category, color, items }) => (
            <div
              key={category}
              data-reveal-item
              className="reveal flex flex-col sm:flex-row gap-4 sm:items-start"
            >
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-navy/55 w-32 pt-1.5 shrink-0">
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span
                    key={skill}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium border ${color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CareerSection() {
  const headerRef = useReveal()
  const timelineRef = useRevealStagger(150)

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber mb-3">
            {t.career.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t.career.title}</h2>
        </div>

        <div ref={timelineRef} className="relative pl-10 space-y-14">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber/25" />

          {CAREER.map(job => (
            <div key={job.company} data-reveal-item className="reveal relative">
              {/* dot offset: line is at left-0 (1px wide), pl-10=40px, dot w-4=16px → -left-[47px] */}
              <span
                className={[
                  'absolute -left-[47px] top-1.5 w-4 h-4 rounded-full border-2',
                  job.current
                    ? 'bg-amber border-amber shadow-[0_0_0_4px_rgba(226,165,77,0.15)]'
                    : 'bg-white border-amber/40',
                ].join(' ')}
              />

              <p className="text-xs font-medium uppercase tracking-[0.15em] text-navy/55 mb-2">
                {job.period}
              </p>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="text-xl font-bold text-navy">{job.company}</h3>
                {job.current && (
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber/15 text-amber">
                    {t.career.currentBadge}
                  </span>
                )}
              </div>

              <p className="text-sm text-forest font-medium mb-1">{job.role}</p>
              <p className="text-xs text-navy/50 mb-5">{job.location}</p>

              <ul className="space-y-2">
                {job.highlights.map(point => (
                  <li key={point} className="flex gap-3 text-sm text-navy/75 leading-relaxed">
                    <span className="text-amber mt-0.5 shrink-0">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  const headerRef = useReveal()
  const cardsRef = useRevealStagger(120)

  return (
    <section className="py-24 sm:py-32 bg-blush">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber mb-3">
            {t.education.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t.education.title}</h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {EDUCATION.map(({ degree, institute, location, year, primary }) => (
            <div
              key={institute}
              data-reveal-item
              className={[
                'reveal rounded-2xl p-8 border',
                primary
                  ? 'bg-navy text-blush border-transparent'
                  : 'bg-white text-navy border-border',
              ].join(' ')}
            >
              <p
                className={`text-xs uppercase tracking-[0.15em] mb-4 ${primary ? 'text-amber' : 'text-navy/40'}`}
              >
                {year}
              </p>
              <h3 className="text-lg font-bold mb-2">{degree}</h3>
              <p className={`text-sm ${primary ? 'text-blush/70' : 'text-navy/60'}`}>{institute}</p>
              <p className={`text-xs mt-1 ${primary ? 'text-blush/35' : 'text-navy/30'}`}>
                {location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementsSection() {
  const headerRef = useReveal()
  const featuredRef = useRevealStagger(120)
  const cardsRef = useRevealStagger(100)
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="py-24 sm:py-32 bg-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="reveal mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber mb-3">
            {t.achievements.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blush">{t.achievements.title}</h2>
          <p className="text-blush/55 text-sm mt-3 max-w-lg leading-relaxed">
            {t.achievements.subtitle}
          </p>
        </div>

        <div ref={featuredRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {ACHIEVEMENTS.filter(a => a.featured).map(a => (
            <div
              key={a.id}
              data-reveal-item
              role="button"
              tabIndex={0}
              className="reveal group cursor-pointer"
              onClick={() => setLightbox(a)}
              onKeyDown={e => e.key === 'Enter' && setLightbox(a)}
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-amber/40 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber via-amber/60 to-amber z-10" />
                <img src={a.image} alt={a.award} className="w-full object-contain bg-white" />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-blush text-xs font-semibold uppercase tracking-widest border border-blush/40 px-4 py-2 rounded-full">
                    {t.achievements.viewFull}
                  </span>
                </div>
              </div>

              <div className="mt-4 px-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber text-navy text-[10px] font-bold uppercase tracking-wider">
                    ★ {a.client ? t.achievements.clientRecognition : t.achievements.recognition}
                  </span>
                  {a.client && (
                    <span className="px-2.5 py-1 rounded-full border border-blush/20 text-blush/70 text-[10px] font-semibold uppercase tracking-wider">
                      {a.client}
                    </span>
                  )}
                </div>
                <h3 className="text-blush font-bold text-base leading-tight mb-0.5">{a.award}</h3>
                <p className="text-blush/50 text-xs uppercase tracking-wide mb-2">
                  {a.issuer} · {a.date}
                </p>
                <p className="text-blush/65 text-sm leading-relaxed">{a.note}</p>
              </div>
            </div>
          ))}
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {ACHIEVEMENTS.filter(a => !a.featured).map(a => (
            <div
              key={a.id}
              data-reveal-item
              role="button"
              tabIndex={0}
              className="reveal group cursor-pointer"
              onClick={() => setLightbox(a)}
              onKeyDown={e => e.key === 'Enter' && setLightbox(a)}
            >
              <div className="relative rounded-2xl overflow-hidden border border-blush/10 shadow-xl mb-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <img
                  src={a.image}
                  alt={`${a.award} certificate`}
                  className="w-full object-contain bg-white"
                />
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-blush text-xs font-semibold uppercase tracking-widest border border-blush/40 px-4 py-2 rounded-full">
                    {t.achievements.viewFull}
                  </span>
                </div>
              </div>

              <div className="px-1">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-amber text-xs font-bold uppercase tracking-wider">
                    {a.issuer}
                  </span>
                  <span className="text-blush/25 text-xs">·</span>
                  <span className="text-blush/45 text-xs">{a.date}</span>
                </div>
                <h3 className="text-blush font-bold text-lg leading-tight mb-1">{a.award}</h3>
                <p className="text-blush/50 text-xs font-medium mb-2 uppercase tracking-wide">
                  {a.type}
                </p>
                <p className="text-blush/65 text-sm leading-relaxed">{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="button"
          tabIndex={0}
          aria-label={t.achievements.close}
          className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightbox(null)}
          onKeyDown={e => e.key === 'Escape' && setLightbox(null)}
        >
          <div
            className="relative flex flex-col items-center"
            style={{ maxWidth: '90vw', maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}
            onKeyDown={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="self-end mb-3 text-blush/60 hover:text-blush text-sm font-medium uppercase tracking-widest transition-colors"
            >
              {t.achievements.close}
            </button>
            <img
              src={lightbox.image}
              alt={`${lightbox.award} certificate`}
              className="rounded-2xl shadow-2xl bg-white object-contain"
              style={{ maxWidth: '90vw', maxHeight: '80vh' }}
            />
            <div className="mt-4 text-center">
              <p className="text-amber text-xs font-bold uppercase tracking-wider mb-1">
                {lightbox.issuer} · {lightbox.date}
              </p>
              <p className="text-blush font-semibold">{lightbox.award}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
