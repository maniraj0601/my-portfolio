import { useState, useEffect, useRef } from 'react'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle({ className = '' }) {
  const { themes, themeId, setTheme, activeTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div className={`relative ${className}`} ref={ref}>
      {/* Trigger — shows active theme swatches */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-label="Choose colour theme"
        aria-expanded={open}
        className="flex items-center gap-1 p-1.5 rounded-lg hover:bg-navy/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber"
      >
        {activeTheme.swatches.slice(0, 3).map(color => (
          <span
            key={color}
            className="w-3.5 h-3.5 rounded-full border border-white/30 shadow-sm"
            style={{ backgroundColor: color }}
          />
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-3 h-3 text-navy/50 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-60 rounded-xl bg-navy border border-blush/10 shadow-2xl z-50 overflow-hidden py-1">
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-amber px-4 pt-2.5 pb-1.5">
            Colour Theme
          </p>

          {themes.map(theme => {
            const isActive = theme.id === themeId
            return (
              <button
                key={theme.id}
                onClick={() => {
                  setTheme(theme.id)
                  setOpen(false)
                }}
                className={[
                  'w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors',
                  isActive ? 'bg-white/10' : 'hover:bg-white/5',
                ].join(' ')}
              >
                {/* Swatches */}
                <div className="flex gap-1 shrink-0">
                  {theme.swatches.slice(0, 4).map(color => (
                    <span
                      key={color}
                      className="w-3 h-3 rounded-full border border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Name */}
                <span
                  className={`text-xs font-medium flex-1 ${isActive ? 'text-amber' : 'text-blush/65'}`}
                >
                  {theme.name}
                </span>

                {/* Active dot */}
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
