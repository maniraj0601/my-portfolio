import { createContext, useContext, useState, useEffect } from 'react'
import { THEMES } from '../themes'

const ThemeContext = createContext(null)

function applyTheme(theme) {
  const root = document.documentElement
  Object.entries(theme.vars).forEach(([key, val]) => {
    root.style.setProperty(key, val)
  })
}

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? Number(saved) : 1
  })

  const activeTheme = THEMES.find(t => t.id === themeId) ?? THEMES[0]

  useEffect(() => {
    applyTheme(activeTheme)
    localStorage.setItem('portfolio-theme', themeId)
  }, [themeId, activeTheme])

  function setTheme(id) {
    setThemeId(id)
  }

  return (
    <ThemeContext.Provider value={{ activeTheme, themeId, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext)
}
