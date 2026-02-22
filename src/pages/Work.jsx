import { useEffect, useRef, useState } from 'react'
import { FEATURED_PROJECTS, ORG_PROJECTS, PERSONAL_PROJECT, TW_PROJECTS } from '../data/content'
import { useReveal, useRevealStagger } from '../hooks'
import { en } from '../locales/en'

const t = en.work

export function Work() {
  return (
    <main className="pt-20">
      <PageHeader />
      <ThoughtworksSection />
      <FeaturedSection />
      <OrgProjectsSection />
      <PersonalSection />
    </main>
  )
}

function PageHeader() {
  return (
    <section className="bg-navy py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p
          className="hero-enter text-xs font-medium uppercase tracking-[0.2em] text-amber mb-4"
          style={{ animationDelay: '0.05s' }}
        >
          {t.header.eyebrow}
        </p>
        <h1
          className="hero-enter text-5xl sm:text-6xl font-bold text-blush leading-tight"
          style={{ animationDelay: '0.2s' }}
        >
          {t.header.title}
          <br />
          <span className="text-aqua">{t.header.titleAccent}</span>
        </h1>
      </div>
    </section>
  )
}

function ThoughtworksSection() {
  const sectionRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const count = TW_PROJECTS.length

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const { top } = sectionRef.current.getBoundingClientRect()
      const scrolled = Math.max(0, -top)
      const step = window.innerHeight * 0.5
      const idx = Math.min(count - 1, Math.floor(scrolled / step))
      const progress = Math.min(1, Math.max(0, (scrolled - idx * step) / step))
      setActiveIdx(idx)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [count])

  return (
    <section
      ref={sectionRef}
      style={{ height: `calc(${count} * 50vh + 100vh)` }}
      className="relative bg-blush"
    >
      <div
        className="sticky top-20 flex flex-col overflow-hidden"
        style={{ height: 'calc(100vh - 5rem)' }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full flex flex-col h-full py-7 gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 shrink-0">
            <div>
              <div className="flex items-center gap-3 mb-1.5">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber">
                  {t.thoughtworks.eyebrow}
                </p>
                <span className="px-2.5 py-1 rounded-full bg-forest text-mint text-[10px] font-bold uppercase tracking-wider">
                  {t.thoughtworks.badge}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-navy">{t.thoughtworks.title}</h2>
            </div>
            <p className="text-sm text-navy/55 font-medium hidden sm:block shrink-0">
              {t.thoughtworks.role}
            </p>
          </div>

          <div className="relative flex-1 min-h-0 overflow-hidden">
            {TW_PROJECTS.map((project, i) => {
              const offset = i - activeIdx
              return (
                <div
                  key={project.id}
                  aria-hidden={offset !== 0}
                  className="absolute inset-0 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: offset === 0 ? 1 : 0,
                    transform: `translateY(${offset * 40}px) scale(${offset === 0 ? 1 : 0.97})`,
                    pointerEvents: offset === 0 ? 'auto' : 'none',
                  }}
                >
                  <TWProjectCard project={project} index={i} />
                </div>
              )
            })}
          </div>

          <div className="flex gap-4 shrink-0">
            {TW_PROJECTS.map((p, i) => {
              const isActive = i === activeIdx
              const isPast = i < activeIdx
              const fill = isActive ? scrollProgress : isPast ? 1 : 0
              return (
                <div key={p.id} className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={[
                        'text-xs font-bold tabular-nums transition-colors duration-300',
                        isActive ? 'text-amber' : isPast ? 'text-amber/60' : 'text-navy/30',
                      ].join(' ')}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={[
                        'text-xs font-medium truncate transition-colors duration-300',
                        isActive ? 'text-navy/70' : 'text-navy/30',
                      ].join(' ')}
                    >
                      {p.title.split('—')[0].trim()}
                    </span>
                  </div>
                  <div className="relative h-1 bg-navy/10 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-amber rounded-full"
                      style={{ width: `${fill * 100}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="shrink-0 flex justify-end -mt-1">
            <p className="text-xs text-navy/40 font-medium uppercase tracking-[0.15em]">
              {activeIdx < count - 1
                ? t.thoughtworks.next(TW_PROJECTS[activeIdx + 1].title.split('—')[0].trim())
                : t.thoughtworks.scrollContinue}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TWProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, '0')

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-border flex flex-col lg:flex-row shadow-sm h-full">
      <div className="bg-forest/8 lg:w-[42%] shrink-0 p-6 flex flex-col gap-4 border-b lg:border-b-0 lg:border-r border-border relative overflow-hidden">
        <span
          aria-hidden
          className="absolute -bottom-2 -right-1 text-[8rem] font-black leading-none select-none text-navy/[0.04] pointer-events-none"
        >
          {num}
        </span>

        <div className="flex flex-wrap gap-2 relative">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber/20 text-amber text-[10px] font-bold uppercase tracking-wider">
            ✓ {t.thoughtworks.goLive} · {project.goLive}
          </span>
          {project.active && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/15 text-green-700 text-[10px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              {t.thoughtworks.active}
            </span>
          )}
        </div>

        <div className="relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-forest/80 mb-1.5">
            {project.category}
          </p>
          <h3 className="text-2xl font-bold text-navy leading-tight mb-1.5">{project.title}</h3>
          <p className="text-xs font-medium text-navy/55">{project.client}</p>
        </div>

        <p className="text-sm text-navy/75 leading-relaxed relative">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-navy/10 mt-auto relative">
          {project.tech.map(tech => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-5">
        <ul className="space-y-3 flex-1">
          {project.highlights.map(h => (
            <li key={h} className="flex gap-3 text-sm text-navy/80 leading-relaxed">
              <span className="text-amber mt-0.5 shrink-0 font-bold">→</span>
              {h}
            </li>
          ))}
        </ul>

        <blockquote className="bg-navy rounded-xl p-5 relative overflow-hidden">
          <span
            aria-hidden
            className="absolute -top-2 left-4 text-6xl text-amber/25 font-serif leading-none select-none"
          >
            &ldquo;
          </span>
          {project.clientLogo && (
            <div className="absolute bottom-4 right-4 bg-white rounded-lg px-3 py-1.5 shadow-sm">
              <img
                src={project.clientLogo}
                alt={project.client}
                className="h-5 w-auto object-contain"
              />
            </div>
          )}
          <p className="relative text-sm font-medium italic text-blush/90 leading-relaxed mb-4 pt-2">
            {project.quote.replace(/^"|"$/g, '')}
          </p>
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-px bg-amber shrink-0" />
            <cite className="text-xs font-semibold text-amber not-italic tracking-wide">
              {project.quoteBy}
            </cite>
          </div>
        </blockquote>
      </div>
    </article>
  )
}

function FeaturedSection() {
  const labelRef = useReveal()
  const cardsRef = useRevealStagger(120)

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={labelRef} className="reveal">
          <SectionEyebrow>{t.featured.eyebrow}</SectionEyebrow>
          <h2 className="text-2xl font-bold text-navy mb-10">{t.featured.title}</h2>
        </div>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {FEATURED_PROJECTS.map(project => (
            <div key={project.id} data-reveal-item className="reveal h-full">
              <FeaturedCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ project }) {
  return (
    <article className="rounded-3xl overflow-hidden bg-white flex flex-col h-full hover:shadow-xl transition-shadow duration-300 border border-border">
      <div
        className="h-52 flex items-end p-7 shrink-0 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-navy/65 pointer-events-none" />
        <div className="relative">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-blush/60 block mb-1">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-blush">{project.title}</h3>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-7 gap-5">
        <p className="text-xs text-navy/55 uppercase tracking-[0.15em]">{project.client}</p>
        <p className="text-navy/80 text-sm leading-relaxed">{project.description}</p>
        <ul className="space-y-2">
          {project.highlights.map(h => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-navy/75">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${project.dot}`} />
              {h}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
          {project.tech.map(tech => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
      </div>
    </article>
  )
}

function OrgProjectsSection() {
  const labelRef = useReveal()
  const cardsRef = useRevealStagger(80)

  return (
    <section className="py-24 sm:py-32 bg-blush">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={labelRef} className="reveal">
          <SectionEyebrow>{t.org.eyebrow}</SectionEyebrow>
          <h2 className="text-2xl font-bold text-navy mb-10">{t.org.title}</h2>
        </div>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
        >
          {ORG_PROJECTS.map(project => (
            <div key={project.id} data-reveal-item className="reveal h-full">
              <OrgCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function OrgCard({ project }) {
  return (
    <article
      className={`${project.color} rounded-2xl p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-300`}
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-navy/55 block mb-4">
        {project.category}
      </span>
      <div className="mb-3">
        <h3 className="text-base font-bold text-navy mb-1">{project.title}</h3>
        <p className="text-xs text-navy/55">{project.client}</p>
      </div>
      <p className="text-sm text-navy/75 leading-relaxed flex-1 mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map(tech => (
          <TechTag key={tech} small>
            {tech}
          </TechTag>
        ))}
      </div>
    </article>
  )
}

function PersonalSection() {
  const ref = useReveal()

  return (
    <section className="py-24 sm:py-32 bg-mint">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <SectionEyebrow>{t.personal.eyebrow}</SectionEyebrow>
          <h2 className="text-2xl font-bold text-navy">{t.personal.title}</h2>
        </div>
        <div ref={ref} className="reveal">
          <PersonalCard project={PERSONAL_PROJECT} />
        </div>
      </div>
    </section>
  )
}

function PersonalCard({ project }) {
  return (
    <article
      className="bg-navy rounded-3xl overflow-hidden relative"
      style={{
        backgroundImage: 'url(/projects/matrimony-bg.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-navy/60 pointer-events-none" />
      <div className="relative">
        <div className="flex items-center justify-between px-8 pt-7 pb-0 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              {t.personal.live} · {project.category}
            </span>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber text-navy text-xs font-bold hover:bg-amber/90 transition-colors duration-200"
          >
            {t.personal.visitSite}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-8 pt-6">
          <div className="md:pr-10 md:border-r border-white/10 flex flex-col gap-5">
            <h3 className="text-3xl font-bold text-white leading-tight">{project.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{project.description}</p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-aqua hover:text-amber transition-colors duration-200 break-all"
            >
              <span>↗</span> {t.personal.siteUrl}
            </a>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/20 text-white/80 bg-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="md:pl-10 mt-8 md:mt-0 flex flex-col justify-center gap-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">
              {t.personal.keyFeatures}
            </p>
            <ul className="space-y-4">
              {project.highlights.map(h => (
                <li key={h} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                  <span className="text-amber mt-0.5 shrink-0 font-bold">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

function SectionEyebrow({ children }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber mb-2">{children}</p>
  )
}

function TechTag({ children, small }) {
  return (
    <span
      className={[
        'rounded-full border border-navy/10 bg-white/70 text-navy font-medium',
        small ? 'px-2.5 py-0.5 text-[10px]' : 'px-3 py-1 text-xs',
      ].join(' ')}
    >
      {children}
    </span>
  )
}
