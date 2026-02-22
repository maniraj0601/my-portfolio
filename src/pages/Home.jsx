import { Link } from 'react-router-dom'
import manirajaPhoto from '../assets/maniraja.jpg'
import { useTypewriter, useReveal, useRevealStagger, useCountUp } from '../hooks'
import { ROLES, COMPANIES, HOME_INTRO, STATS } from '../data/content'
import { en } from '../locales/en'

const t = en.home

export function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
    </main>
  )
}

function HeroSection() {
  const { text, isTyping } = useTypewriter(ROLES)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-blush">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-navy opacity-[0.06]"
          style={{ filter: 'blur(2px)' }}
        />
        <div
          className="absolute -bottom-24 -left-20 w-[400px] h-[400px] rounded-full bg-aqua opacity-50"
          style={{ filter: 'blur(60px)' }}
        />
        <div className="absolute top-1/3 left-8 sm:left-12 flex flex-col gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber opacity-50" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p
              className="hero-enter inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-forest mb-6"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="w-6 h-px bg-amber inline-block" />
              {t.hero.eyebrow}
            </p>

            <h1
              className="hero-enter text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.92] tracking-tight text-navy mb-6"
              style={{ animationDelay: '0.3s' }}
            >
              {t.hero.greeting}
              <br />
              <span className="text-forest">{t.hero.name}</span>
            </h1>

            <div
              className="hero-enter h-8 flex items-center mb-8"
              style={{ animationDelay: '0.5s' }}
              aria-label={`Role: ${text}`}
            >
              <span className="text-lg font-medium text-amber">{text}</span>
              <span
                className="cursor-blink text-amber ml-0.5"
                aria-hidden="true"
                style={{ opacity: isTyping ? undefined : 1 }}
              />
            </div>

            <p
              className="hero-enter text-base sm:text-lg text-navy/75 max-w-md leading-relaxed mb-10"
              style={{ animationDelay: '0.7s' }}
            >
              {t.hero.tagline}
            </p>

            <div
              className="hero-enter flex flex-col sm:flex-row flex-wrap gap-4"
              style={{ animationDelay: '0.9s' }}
            >
              <Link
                to="/work"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-navy text-blush text-sm font-medium rounded-full hover:bg-forest transition-colors duration-200"
              >
                {t.hero.cta.work}
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-navy/20 text-navy text-sm font-medium rounded-full hover:border-navy/50 transition-colors duration-200"
              >
                {t.hero.cta.about}
              </Link>
              <a
                href="/Maniraja_Resume.pdf"
                download="Maniraja_A_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-amber/40 text-navy text-sm font-medium rounded-full hover:bg-amber/10 hover:border-amber transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-amber shrink-0"
                  aria-hidden="true"
                >
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                {t.hero.cta.resume}
              </a>
            </div>
          </div>

          <div className="hero-enter relative hidden lg:block" style={{ animationDelay: '0.4s' }}>
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-[2rem] border-2 border-amber/40 -z-0 pointer-events-none" />
            <div
              className="absolute inset-0 rounded-[2rem] bg-aqua/20 -z-10 scale-105"
              style={{ filter: 'blur(30px)' }}
            />
            <img
              src={manirajaPhoto}
              alt="Maniraja A — React Engineer"
              className="relative z-10 w-full rounded-[2rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 left-6 z-20 bg-white rounded-2xl shadow-lg px-5 py-3 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span className="text-xs font-semibold text-navy tracking-wide">{t.hero.openTo}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35">
        <span className="text-[10px] uppercase tracking-[0.2em] text-navy">{t.hero.scroll}</span>
        <div className="w-px h-8 bg-navy/40 animate-pulse" />
      </div>
    </section>
  )
}

function IntroSection() {
  const textRef = useReveal()
  const statsRef = useRevealStagger(120)

  return (
    <section className="bg-mint py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div ref={textRef} className="reveal">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy leading-snug mb-6">
              {HOME_INTRO.heading}
              <br />
              <span className="text-forest">{HOME_INTRO.headingAccent}</span>
            </h2>
            <p className="text-navy/75 leading-relaxed mb-8">{HOME_INTRO.body}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {HOME_INTRO.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-white/70 text-navy text-xs font-medium border border-navy/10"
                >
                  {skill}
                </span>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-navy transition-colors duration-200 group"
            >
              {t.intro.moreAbout}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <div ref={statsRef} className="flex flex-col gap-4">
            {STATS.map(({ target, suffix, label }) => (
              <StatPill key={label} target={target} suffix={suffix} label={label} />
            ))}
            <CompaniesStatPill />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatPill({ target, suffix, label }) {
  const { value, ref } = useCountUp(target)
  return (
    <div
      ref={ref}
      data-reveal-item
      className="reveal flex items-center gap-6 bg-blush rounded-2xl px-8 py-6"
    >
      <span className="text-4xl font-bold text-amber min-w-[4.5rem] tabular-nums">
        {value}
        {suffix}
      </span>
      <span className="text-navy/75 text-sm leading-snug font-medium">{label}</span>
    </div>
  )
}

function CompaniesStatPill() {
  const { value, ref } = useCountUp(COMPANIES.length)
  return (
    <div
      ref={ref}
      data-reveal-item
      className="reveal bg-blush rounded-2xl px-8 py-6 flex items-center gap-6"
    >
      <span className="text-4xl font-bold text-amber min-w-[4.5rem] tabular-nums">{value}</span>
      <div className="flex flex-col gap-2.5 flex-1">
        <span className="text-navy/75 text-sm font-medium">{en.home.intro.companiesLabel}</span>
        <div className="grid grid-cols-2 gap-1.5">
          {COMPANIES.map(c => (
            <div
              key={c.name}
              className="rounded-lg px-3 py-2 flex items-center justify-center bg-white/70 border border-navy/8"
            >
              <img
                src={c.logo}
                alt={c.name}
                title={c.name}
                className="h-5 w-auto max-w-[90px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
