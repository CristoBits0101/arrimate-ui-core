'use client'

import { useEffect, useState } from 'react'

// Allowed themes
type Theme = 'system' | 'dark' | 'light'

const useThemeSection = () => {
  // Initialize theme state from localStorage
  const [theme, setTheme] = useState<Theme>(() => {
    // Verify if app execution is in the client
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') as Theme | null
      return storedTheme || 'system'
    }
    // Fallback for server-side rendering
    return 'system'
  })

  /**
   * Change the selected theme
   * @param selectedTheme
   */
  const changeTheme = (selectedTheme: Theme): void => {
    setTheme(selectedTheme)
    applyTheme(selectedTheme)
    // Notify that the theme has changed
    window.dispatchEvent(
      new CustomEvent('theme-change', { detail: selectedTheme })
    )
  }

  /**
   * Apply the selected theme
   * @param theme
   */
  const applyTheme = (theme: Theme): void => {
    const root = document.documentElement

    switch (theme) {
      case 'dark':
        root.setAttribute('data-mode', 'dark')
        localStorage.setItem('theme', theme)
        break
      case 'light':
        root.setAttribute('data-mode', 'light')
        localStorage.setItem('theme', theme)
        break
      case 'system':
        root.setAttribute('data-mode', '')
        localStorage.removeItem('theme')
        break
    }
  }

  // Apply theme on mount if it changes
  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return {
    theme,
    changeTheme
  }
}

export default useThemeSection
