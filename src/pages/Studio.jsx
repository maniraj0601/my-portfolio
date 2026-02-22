import { useTheme } from '../context/ThemeContext'

/* Hidden developer route — /studio
   Not linked from anywhere in the public UI. */
export function Studio() {
  const { themes, themeId, setTheme } = useTheme()

  return (
    <main className="min-h-screen bg-navy pt-24 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber mb-3">
            🎨 Developer Studio
          </p>
          <h1 className="text-4xl font-bold text-blush mb-2">Theme Studio</h1>
          <p className="text-blush/50 text-sm">
            Hidden route — only you can see this. Select a palette to apply it site-wide instantly.
          </p>
        </div>

        {/* Theme cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {themes.map(theme => {
            const isActive = theme.id === themeId
            return (
              <button
                key={theme.id}
                onClick={() => setTheme(theme.id)}
                className={[
                  'text-left rounded-2xl p-6 border-2 transition-all duration-200',
                  isActive
                    ? 'border-amber bg-white/10 shadow-[0_0_0_4px_rgba(226,165,77,0.25),0_8px_32px_rgba(226,165,77,0.15)] scale-[1.04]'
                    : 'border-blush/10 bg-white/4 hover:border-blush/30 hover:bg-white/6',
                ].join(' ')}
              >
                {/* Theme number + name */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber block mb-0.5">
                      Theme {theme.id}
                    </span>
                    <h2 className="text-blush font-bold text-lg leading-tight">{theme.name}</h2>
                    <p className="text-blush/45 text-xs mt-0.5">{theme.desc}</p>
                  </div>
                  {isActive && (
                    <span className="px-3 py-1 rounded-full bg-amber text-navy text-[10px] font-bold uppercase tracking-wider shrink-0">
                      Active
                    </span>
                  )}
                </div>

                {/* Swatches */}
                <div className="flex gap-2">
                  {theme.swatches.map(color => (
                    <div
                      key={color}
                      className="flex-1 h-10 rounded-lg shadow-sm"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>

                {/* Raw hex values */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {theme.swatches.map(color => (
                    <span key={color} className="text-[9px] font-mono text-blush/30">
                      {color}
                    </span>
                  ))}
                </div>
              </button>
            )
          })}
        </div>

        <p className="mt-8 text-center text-blush/20 text-xs">
          Navigate away — your theme choice is saved to localStorage.
        </p>
      </div>
    </main>
  )
}
