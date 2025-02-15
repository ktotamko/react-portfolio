// src/pages/Home/SkillsSection.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Container from '../../components/Container/Container'
import styles from './SkillsSection.module.css'

// Import skill icons
import animationIcon from '../../assets/images/skills/animation.svg'
import compatibilityIcon from '../../assets/images/skills/compatibility.svg'
import htmlIcon from '../../assets/images/skills/html.svg'
import cssIcon from '../../assets/images/skills/css.svg'
import jsIcon from '../../assets/images/skills/js.svg'
import copilotIcon from '../../assets/images/skills/copilot.svg'
import reactIcon from '../../assets/images/skills/react.svg'
import reduxIcon from '../../assets/images/skills/redux.svg'
import chatgptIcon from '../../assets/images/skills/chatgpt.svg'
import nodejsIcon from '../../assets/images/skills/nodejs.svg'
import typescriptIcon from '../../assets/images/skills/typescript.svg'
import sassIcon from '../../assets/images/skills/sass.svg'
import figmaIcon from '../../assets/images/skills/figma.svg'
import gitIcon from '../../assets/images/skills/git.svg'
import gridIcon from '../../assets/images/skills/grid.svg'
import gulpIcon from '../../assets/images/skills/gulp.svg'
import responsiveImgIcon from '../../assets/images/skills/responsiveimg.svg'
import responsiveWebIcon from '../../assets/images/skills/responsiveweb.svg'
import pythonIcon from '../../assets/images/skills/python.svg'

const skills = [
	{ src: animationIcon, caption: 'Web\nAnimation' },
	{ src: compatibilityIcon, caption: 'Cross Browser\nCompatibility' },
	{ src: htmlIcon, caption: 'HTML(structure\n& content)' },
	{ src: cssIcon, caption: 'CSS\n(styling & layout)' },
	{ src: jsIcon, caption: 'JS (interactivity\n& functionality)' },
	{ src: copilotIcon, caption: 'GitHub\nCopilot' },
	{ src: reactIcon, caption: 'React (frontend \nframework)' },
	{ src: reduxIcon, caption: 'Redux(state\nmanagement)' },
	{ src: chatgptIcon, caption: 'ChatGPT\n(AI Integration)' },
	{ src: nodejsIcon, caption: 'Node.js\nBackend' },
	{ src: typescriptIcon, caption: 'TypeScript\n(JS superset)' },
	{ src: sassIcon, caption: 'CSS Preprocessors\n(Sass/SCSS)' },
	{ src: figmaIcon, caption: 'UI/UX Web Design\n(Figma)' },
	{ src: gitIcon, caption: 'Version Control\n(Git)' },
	{ src: gridIcon, caption: 'CSS Grid &\nFlexbox' },
	{ src: gulpIcon, caption: 'Build Tools\n(Webpack, Gulp)' },
	{ src: responsiveImgIcon, caption: 'Responsive Media\n& Images' },
	{ src: responsiveWebIcon, caption: 'Responsive Web\nDesign' },
	{ src: pythonIcon, caption: 'Python (backend\ndevelopment)' },
]

const SkillsSection = () => {
	return (
		<section className={`${styles.skills} page__skills`}>
			<Container>
				<h2 className={styles.title}>
					skills that allow me to create beautiful and functional web interfaces
				</h2>
				<div className={styles.slider}>
					<Swiper
						modules={[Autoplay]}
						spaceBetween={16}
						grabCursor={true}
						autoplay={{
							delay: 1,
							disableOnInteraction: false,
							pauseOnMouseEnter: false,
						}}
						speed={3000}
						loop={true}
						allowTouchMove={false}
						breakpoints={{
							240: { slidesPerView: 1.3 },
							319: { slidesPerView: 1.8 },
							350: { slidesPerView: 2 },
							425: { slidesPerView: 2.5 },
							500: { slidesPerView: 3 },
							575: { slidesPerView: 3.5 },
							650: { slidesPerView: 4 },
							725: { slidesPerView: 4.5 },
							800: { slidesPerView: 5 },
							875: { slidesPerView: 5.5 },
							950: { slidesPerView: 6 },
							1025: { slidesPerView: 6.5 },
							1100: { slidesPerView: 7 },
							1175: { slidesPerView: 7.5 },
							1250: { slidesPerView: 8 },
						}}
						className={styles.swiperContainer}
					>
						{skills.map((skill, idx) => (
							<SwiperSlide key={idx} className={styles.slide}>
								<div className={styles.item}>
									<div className={styles.image}>
										<img src={skill.src} alt='skills' />
										<div className={styles.caption}>
											{skill.caption.split('\n').map((line, i) => (
												<span key={i}>
													{line}
													{i < skill.caption.split('\n').length - 1 && <br />}
												</span>
											))}
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Container>
		</section>
	)
}

export default SkillsSection
