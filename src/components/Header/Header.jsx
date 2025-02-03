// src/components/Header/Header.jsx
import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

// Import your logo assets (adjust paths as necessary)
import logoDark from '../../assets/images/logo.svg'
import logoLight from '../../assets/images/logo-light.svg'

// Import the icons
import sunIcon from '../../assets/images/sun.svg'
import moonIcon from '../../assets/images/moon.svg'

// Import your ThemeContext (assumed to be set up in your project)
import { ThemeContext } from '../../context/ThemeContext'

const Header = () => {
	// Local state to track burger menu open/close
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Access theme and theme functions from ThemeContext
	const { theme, toggleTheme, resetTheme, isCustomTheme } =
		useContext(ThemeContext)

	// Update the <html> class based on the burger menu state.
	useEffect(() => {
		document.documentElement.classList.toggle('menu-opened', isMenuOpen)
	}, [isMenuOpen])

	// Handler for burger menu toggle
	const handleBurgerClick = () => {
		setIsMenuOpen(prev => !prev)
	}

	// Handler for smooth scrolling on menu link click
	const handleLinkClick = e => {
		e.preventDefault()
		const targetSelector = e.currentTarget.getAttribute('data-goto')
		const targetElement = document.querySelector(targetSelector)
		if (targetElement) {
			// Close the burger menu if open
			setIsMenuOpen(false)
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}
	}

	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				{/* Logo Link */}
				<Link to='/' className={styles.logoLink}>
					{/* Conditionally render logo based on theme */}
					{theme === 'light' ? (
						<img src={logoLight} alt='Logo' className={styles.logo} />
					) : (
						<img src={logoDark} alt='Logo' className={styles.logo} />
					)}
				</Link>

				{/* Navigation Menu */}
				<nav className={styles.headerMenu}>
					<div className={styles.menuBody}>
						<ul className={styles.menuList}>
							<li className={styles.menuItem}>
								<a
									href='#'
									data-goto='.page__main'
									onClick={handleLinkClick}
									className={styles.menuLink}
								>
									Home
								</a>
							</li>
							<li className={styles.menuItem}>
								<a
									href='#'
									data-goto='.page__skills'
									onClick={handleLinkClick}
									className={styles.menuLink}
								>
									Skills
								</a>
							</li>
							<li className={styles.menuItem}>
								<a
									href='#'
									data-goto='.page__portfolio'
									onClick={handleLinkClick}
									className={styles.menuLink}
								>
									Portfolio
								</a>
							</li>
							<li className={styles.menuItem}>
								<a
									href='#'
									data-goto='.page__start'
									onClick={handleLinkClick}
									className={styles.menuLink}
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</nav>

				{/* Theme & Reset Buttons */}
				<div className={styles.headerAction}>
					<button
						type='button'
						className={styles.headerTheme}
						onClick={toggleTheme}
						aria-label='Toggle Theme'
					/>
					<button
						type='button'
						className={`${styles.headerReset} ${
							isCustomTheme ? styles.active : ''
						}`}
						onClick={resetTheme}
						aria-label='Reset Theme'
					/>
				</div>

				{/* Burger Menu Button */}
				<button
					type='button'
					className={styles.iconMenu}
					onClick={handleBurgerClick}
					aria-label='Toggle Menu'
				>
					<span></span>
				</button>
			</div>
		</header>
	)
}

export default Header
