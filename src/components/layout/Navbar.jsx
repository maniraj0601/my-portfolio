import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { en } from '../../locales/en'

const t = en.nav
const NAV_LINKS = t.links

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { themes, themeId, setTheme } = useTheme()
  const { pathname } = useLocation()
  const darkPage = pathname === '/studio'

  function cycleTheme() {
    const next = (themeId % themes.length) + 1
    setTheme(next)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || darkPage
            ? 'bg-blush/90 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-navy font-bold text-2xl tracking-tight select-none"
          >
            MA<span className="text-amber">.</span>
          </NavLink>

          <nav className="hidden md:flex items-center gap-1" aria-label={t.mainNav}>
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 group',
                    isActive ? 'text-navy' : 'text-navy/50 hover:text-navy',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={[
                        'absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-amber origin-left transition-transform duration-300',
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      ].join(' ')}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/Maniraja_Resume.pdf"
              download="Maniraja_A_Resume.pdf"
              className={[
                'hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium',
                'border border-navy/20 text-navy/70 hover:border-navy/50 hover:text-navy transition-colors duration-200',
              ].join(' ')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5 shrink-0"
                aria-hidden="true"
              >
                <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
              </svg>
              {t.resume}
            </a>

            <a
              href="mailto:iammaniraj06@gmail.com"
              className={[
                'hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium',
                'bg-navy text-blush hover:bg-forest transition-colors duration-200',
              ].join(' ')}
            >
              {t.letsTalk}
              <span aria-hidden="true" className="text-amber">
                ↗
              </span>
            </a>

            <button
              onClick={cycleTheme}
              title={`${themes.find(th => th.id === themeId)?.name} — click to cycle themes`}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-navy/15 hover:border-navy/35 transition-colors duration-200 group"
              aria-label={t.switchTheme}
            >
              <div className="flex gap-0.5">
                {themes
                  .find(th => th.id === themeId)
                  ?.swatches.slice(0, 3)
                  .map(color => (
                    <span
                      key={color}
                      className="w-3 h-3 rounded-full border border-white/30"
                      style={{ backgroundColor: color }}
                    />
                  ))}
              </div>
              <span className="text-[10px] font-bold text-navy/40 group-hover:text-navy/70 tabular-nums transition-colors">
                {themeId}/{themes.length}
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 rounded-md hover:bg-navy/5 transition-colors"
              aria-label={t.openMenu}
              aria-expanded={menuOpen}
            >
              <span className="w-5 h-[2px] bg-navy rounded-full mx-auto block" />
              <span className="w-3.5 h-[2px] bg-navy rounded-full mx-auto block" />
              <span className="w-5 h-[2px] bg-navy rounded-full mx-auto block" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay — backdrop fades, links slide up with stagger */}
      <div
        className={[
          'fixed inset-0 z-[100] md:hidden transition-opacity duration-400',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-modal="true"
        role="dialog"
        aria-label={t.mobileNav}
      >
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-forest/20 blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-amber/10 blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative h-full flex flex-col px-8 pt-8 pb-12">
          <div className="flex items-center justify-between mb-16">
            <span className="text-blush font-bold text-2xl tracking-tight">
              MA<span className="text-amber">.</span>
            </span>
            <button
              onClick={closeMenu}
              className={[
                'w-10 h-10 flex items-center justify-center rounded-full',
                'border border-blush/20 text-blush/70 hover:text-blush hover:border-blush/40',
                'transition-all duration-300',
                menuOpen ? 'rotate-0 opacity-100' : 'rotate-45 opacity-0',
              ].join(' ')}
              aria-label={t.closeMenu}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M1 1l16 16M17 1L1 17" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center gap-4" aria-label={t.mobileNav}>
            {NAV_LINKS.map(({ label, to }, index) => (
              <div
                key={to}
                className={[
                  'overflow-hidden transition-all duration-500',
                  menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                ].join(' ')}
                style={{ transitionDelay: menuOpen ? `${index * 75 + 100}ms` : '0ms' }}
              >
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      'text-5xl sm:text-6xl font-bold tracking-tight block transition-colors duration-200',
                      isActive ? 'text-amber' : 'text-blush/70 hover:text-blush',
                    ].join(' ')
                  }
                >
                  {label}
                </NavLink>
              </div>
            ))}
          </nav>

          <div
            className={[
              'transition-all duration-500',
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ].join(' ')}
            style={{ transitionDelay: menuOpen ? '450ms' : '0ms' }}
          >
            <p className="text-blush/30 text-xs uppercase tracking-[0.2em] mb-2">{t.getInTouch}</p>
            <a
              href="mailto:iammaniraj06@gmail.com"
              className="text-aqua text-sm hover:text-amber transition-colors duration-200"
            >
              iammaniraj06@gmail.com
            </a>
            <div className="mt-5">
              <a
                href="/Maniraja_Resume.pdf"
                download="Maniraja_A_Resume.pdf"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-blush/20 text-blush/70 text-sm font-medium hover:border-blush/40 hover:text-blush transition-colors duration-200"
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
                {t.downloadResume}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
