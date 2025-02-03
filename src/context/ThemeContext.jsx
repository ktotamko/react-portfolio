// src/context/ThemeContext.jsx
import React, { createContext, useState, useEffect, useMemo } from 'react'

export const ThemeContext = createContext({
	theme: 'dark', // default value
	toggleTheme: () => {},
	resetTheme: () => {},
	isCustomTheme: false, // Add this
})

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem('user-theme')
  const getSystemTheme = () =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
  const getDefaultTheme = () => savedTheme || getSystemTheme()

	const [theme, setTheme] = useState(getDefaultTheme)
  const [isCustomTheme, setIsCustomTheme] = useState(!!savedTheme)

	useEffect(() => {
		const htmlEl = document.documentElement
		htmlEl.classList.remove('light', 'dark')
		htmlEl.classList.add(theme)
	}, [theme])

	useEffect(() => {
		if (!isCustomTheme && window.matchMedia) {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light')
			mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
		}
	}, [isCustomTheme])

	// Toggle between light and dark themes
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		localStorage.setItem('user-theme', newTheme)
		setIsCustomTheme(true)
	}

	// Reset theme (remove the user saved theme) and revert to system preference
	const resetTheme = () => {
		localStorage.removeItem('user-theme')
		setIsCustomTheme(false)
		setTheme(getSystemTheme())
	}

  const contextValue = useMemo(
    () => ({ theme, toggleTheme, resetTheme, isCustomTheme }),
    [theme, isCustomTheme]
  )

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}
