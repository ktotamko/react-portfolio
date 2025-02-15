// src/pages/Home/PortfolioSection.jsx
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Title from '../../components/Common/Title'
import Text from '../../components/Common/Text'
import Button from '../../components/Common/Button'
import styles from './PortfolioSection.module.css'

// Import portfolio images
import portfolio01 from '../../assets/images/portfolio/01.webp'
import portfolio02 from '../../assets/images/portfolio/02.webp'
import portfolio03 from '../../assets/images/portfolio/03.webp'
import portfolio04 from '../../assets/images/portfolio/04.webp'
import portfolio05 from '../../assets/images/portfolio/05.webp'
import portfolio06 from '../../assets/images/portfolio/06.webp'

// Import skill icons
import skillJs from '../../assets/images/skills/js.svg'
import skillCss from '../../assets/images/skills/css.svg'
import skillHtml from '../../assets/images/skills/html.svg'
import skillReact from '../../assets/images/skills/react.svg'
import skillRedux from '../../assets/images/skills/redux.svg'
import skillGulp from '../../assets/images/skills/gulp.svg'
import skillGit from '../../assets/images/skills/git.svg'
import skillNodejs from '../../assets/images/skills/nodejs.svg'
import skillSass from '../../assets/images/skills/sass.svg'
import skillTypescript from '../../assets/images/skills/typescript.svg'
import skillPython from '../../assets/images/skills/python.svg'

const portfolioItems = [
	// First column: 3 items
	{
		href: 'https://ktotamko.github.io/',
		image: portfolio01,
		title: 'Developer Portfolio',
		skills: [skillJs, skillCss, skillHtml],
	},
	{
		href: 'https://ktotamko.github.io/growfy/',
		image: portfolio02,
		title: 'Marketing Solutions Agency Template',
		skills: [skillJs, skillCss, skillHtml],
	},
	{
		href: 'https://ktotamko.github.io/book-library-app/',
		image: portfolio05,
		title: 'Book Library App',
		skills: [skillReact, skillRedux, skillJs, skillGulp, skillGit, skillNodejs],
	},
	// Second column: 3 items
	{
		href: 'https://ktotamko.github.io/fixpro/',
		image: portfolio03,
		title: 'Home Repair Services Template',
		skills: [skillJs, skillGulp, skillSass],
	},
	{
		href: 'https://ktotamko.github.io/eco/',
		image: portfolio04,
		title: 'Eco Houses Builder Template',
		skills: [skillJs, skillCss, skillHtml],
	},
	{
		href: 'https://k-news-app.vercel.app/',
		image: portfolio06,
		title: 'News App',
		caption: 'under construction...',
		skills: [skillTypescript, skillReact, skillRedux, skillPython],
	},
]

const PortfolioSection = () => {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	})

	// Split the six items evenly into two columns
	const midIndex = 3
	const firstColumnItems = portfolioItems.slice(0, midIndex)
	const secondColumnItems = portfolioItems.slice(midIndex)

	return (
		<section
			ref={ref}
			className={`${styles.portfolio} page__portfolio ${
				inView ? styles.active : ''
			}`}
		>
			<Container>
				<div className={styles.portfolioContainer}>
					<div className={styles.portfolioContent}>
						<header className={styles.headerMain}>
							{/* Use common Title and Text components with the "active" prop */}
							<Title active={inView}>
								Latest <span>Projects</span>
							</Title>
							<Text active={inView}>Take a look at my latest projects.</Text>
							<div className={styles.actions}>
								<Link to='/skills' className={styles.buttonLink}>
									<Button>See all</Button>
								</Link>
							</div>
						</header>
					</div>
					<div className={styles.portfolioItems}>
						<div
							className={`${styles.column} ${
								inView ? styles.activeColumn : ''
							}`}
						>
							{firstColumnItems.map((item, idx) => (
								<article key={idx} className={styles.item}>
									<a
										href={item.href}
										target='_blank'
										rel='noopener noreferrer'
										className={styles.link}
									>
										<div className={styles.itemIcon}>
											<img src={item.image} alt='portfolio' />
											<div className={styles.itemSkills}>
												{item.skills.map((skill, i) => (
													<img key={i} src={skill} alt='skill' />
												))}
											</div>
										</div>
										<h4 className={styles.itemTitle}>
											{item.title}
											{item.caption && (
												<span className={styles.caption}>{item.caption}</span>
											)}
										</h4>
									</a>
								</article>
							))}
						</div>
						<div
							className={`${styles.column} ${
								inView ? styles.activeColumn : ''
							}`}
						>
							{secondColumnItems.map((item, idx) => (
								<article key={idx} className={styles.item}>
									<a
										href={item.href}
										target='_blank'
										rel='noopener noreferrer'
										className={styles.link}
									>
										<div className={styles.itemIcon}>
											<img src={item.image} alt='portfolio' />
											<div className={styles.itemSkills}>
												{item.skills.map((skill, i) => (
													<img key={i} src={skill} alt='skill' />
												))}
											</div>
										</div>
										<h4 className={styles.itemTitle}>
											{item.title}
											{item.caption && (
												<span className={styles.caption}>{item.caption}</span>
											)}
										</h4>
									</a>
								</article>
							))}
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default PortfolioSection
