// src/components/Footer/Footer.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import Container from '../Container/Container'
import Button from '../../components/Common/Button'

// Import logo images (reuse from Header)
import logoDark from '../../assets/images/logo.svg'
import logoLight from '../../assets/images/logo-light.svg'

// Import social icons using imports so that Vite resolves their URLs
import social01 from '../../assets/images/social/01.svg'
import social02 from '../../assets/images/social/02.svg'
import social03 from '../../assets/images/social/03.svg'
import social04 from '../../assets/images/social/04.svg'
import social05 from '../../assets/images/social/05.svg'

const socialLinks = [
	{
		href: 'https://linkedin.com/in/nickolasyurchenko',
		src: social01,
		alt: 'LinkedIn',
	},
	{
		href: 'https://github.com/ktotamko?tab=repositories',
		src: social02,
		alt: 'GitHub',
	},
	{ href: '#', src: social05, alt: 'Social 3' },
	{ href: '#', src: social03, alt: 'Social 4' },
	{ href: '#', src: social04, alt: 'Social 5' },
]

const sitemapLinks = [
	{ label: 'Home', goto: '.page__main' },
	{ label: 'Portfolio', goto: '.page__portfolio' },
	{ label: 'Skills', goto: '.page__skills' },
	{ label: 'Contact me', goto: '.subscribe__input' },
]

const resourceLinks = [
	{ label: 'Opensource', href: 'https://github.com/ktotamko?tab=repositories' },
]

const Footer = () => {
	return (
		<footer className={styles.footer}>
			{/* Main Footer Section */}
			<div className={styles.footerMain}>
				<Container>
					<div className={styles.mainFooterContainer}>
						{/* Column 1: Logo, Description & Social Links */}
						<div className={styles.mainFooterColumn}>
							<Link to='/' className={styles.mainFooterLogo}>
								<img src={logoDark} alt='Logo' className={styles.logoDark} />
								<img src={logoLight} alt='Logo' className={styles.logoLight} />
							</Link>
							<div className={styles.mainFooterText}>
								<p>
									I am a passionate developer with a strong belief in learning
									by doing. I continuously challenge myself to think creatively
									and contribute to building better, more innovative solutions
									for the future.
								</p>
							</div>
							<div className={styles.mainFooterSocial}>
								{socialLinks.map((link, idx) => (
									<a
										key={idx}
										href={link.href}
										className={styles.socialLink}
										target='_blank'
										rel='noopener noreferrer'
									>
										<img src={link.src} alt={link.alt} />
									</a>
								))}
							</div>
						</div>

						{/* Column 2: Sitemap */}
						<div className={styles.mainFooterColumn}>
							<div className={styles.mainFooterLabel}>Sitemap</div>
							<nav className={styles.menuFooter}>
								<ul className={styles.menuFooterList}>
									{sitemapLinks.map((item, idx) => (
										<li key={idx} className={styles.menuFooterItem}>
											<a
												href='#'
												data-goto={item.goto}
												className={styles.menuFooterLink}
											>
												{item.label}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</div>

						{/* Column 3: Resources */}
						<div className={styles.mainFooterColumn}>
							<div className={styles.mainFooterLabel}>Resources</div>
							<nav className={styles.menuFooter}>
								<ul className={styles.menuFooterList}>
									{resourceLinks.map((item, idx) => (
										<li key={idx} className={styles.menuFooterItem}>
											<a href={item.href} className={styles.menuFooterLink}>
												{item.label}
											</a>
										</li>
									))}
								</ul>
							</nav>
						</div>

						{/* Column 4: Subscription / Contact */}
						<div className={styles.mainFooterColumn}>
							<div className={styles.mainFooterLabel}>
								Still have a question?
							</div>
							<div className={styles.mainFooterText}>
								<p>
									If you can't find what you're looking for, feel free to leave
									your contact details, and I'll get in touch with you.
								</p>
							</div>
							<form className={styles.subscribe} action='#'>
								<input
									type='email'
									className={styles.subscribeInput}
									placeholder='Enter your email'
								/>
								{/* Use the reusable Button component for the submit button */}
								<Button type='submit'>Get in touch</Button>
							</form>
						</div>
					</div>
				</Container>
			</div>

			{/* Footer Bottom Section */}
			<div className={styles.footerBottom}>
				<Container>
					<div className={styles.bottomFooterContainer}>
						<div className={styles.bottomFooterCopy}>
							Copyright © 2024, Nicholas U. All rights reserved.
						</div>
					</div>
				</Container>
			</div>
		</footer>
	)
}

export default Footer