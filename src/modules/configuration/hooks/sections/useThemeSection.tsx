'use client'

// React hooks
import { useState } from 'react'

// Allowed themes
type Theme = 'system' | 'dark' | 'light'

const useThemeSection = () => {
  // Manage the status of selected theme
  const [theme, setTheme] = useState<Theme>('system')

  /**
   * Change the selected theme
   * @param selectedTheme
   */
  const changeTheme = (selectedTheme: Theme): void => {
    // 1. Update the selected theme
    setTheme(selectedTheme)

    // 2. Apply the selected theme
    applyTheme(selectedTheme)
  }

  /**
   * Apply the theme selected
   * @param selectedTheme
   */
  const applyTheme = (theme: Theme): void => {
    // 1. Get the HTML element
    const root = document.documentElement

    // 2. Apply the selected theme to the root element
    switch (theme) {
      case 'dark':
        root.setAttribute('data-mode', 'dark')
        localStorage.removeItem('theme')
        localStorage.setItem('theme', theme)
        break
      case 'light':
        root.setAttribute('data-mode', 'light')
        localStorage.removeItem('theme')
        localStorage.setItem('theme', theme)
        break
      case 'system':
        break
    }
  }

  return {
    theme,
    changeTheme,
  }
}

export default useThemeSection
