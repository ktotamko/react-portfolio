// src/pages/Home/SkillsSection.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './SkillsSection.module.css'

const skills = [
	{
		src: require('../../assets/images/skills/animation.svg').default,
		caption: 'Web\nAnimation',
	},
	{
		src: require('../../assets/images/skills/compatibility.svg').default,
		caption: 'Cross Browser\nCompatibility',
	},
	{
		src: require('../../assets/images/skills/html.svg').default,
		caption: 'HTML\n(structure & content)',
	},
	{
		src: require('../../assets/images/skills/css.svg').default,
		caption: 'CSS\n(styling & layout)',
	},
	{
		src: require('../../assets/images/skills/js.svg').default,
		caption: 'JS\n(interactivity)',
	},
	{
		src: require('../../assets/images/skills/copilot.svg').default,
		caption: 'GitHub\nCopilot',
	},
	{
		src: require('../../assets/images/skills/react.svg').default,
		caption: 'React\n(frontend)',
	},
	{
		src: require('../../assets/images/skills/redux.svg').default,
		caption: 'Redux\n(state management)',
	},
	{
		src: require('../../assets/images/skills/chatgpt.svg').default,
		caption: 'ChatGPT\n(AI Integration)',
	},
	{
		src: require('../../assets/images/skills/nodejs.svg').default,
		caption: 'Node.js\nBackend',
	},
	{
		src: require('../../assets/images/skills/typescript.svg').default,
		caption: 'TypeScript\n(JS superset)',
	},
	{
		src: require('../../assets/images/skills/sass.svg').default,
		caption: 'CSS Preprocessors\n(Sass/SCSS)',
	},
	{
		src: require('../../assets/images/skills/figma.svg').default,
		caption: 'UI/UX Design\n(Figma)',
	},
	{
		src: require('../../assets/images/skills/git.svg').default,
		caption: 'Version Control\n(Git)',
	},
	{
		src: require('../../assets/images/skills/grid.svg').default,
		caption: 'CSS Grid &\nFlexbox',
	},
	{
		src: require('../../assets/images/skills/gulp.svg').default,
		caption: 'Build Tools\n(Webpack, Gulp)',
	},
	{
		src: require('../../assets/images/skills/responsiveimg.svg').default,
		caption: 'Responsive Media\n& Images',
	},
	{
		src: require('../../assets/images/skills/responsiveweb.svg').default,
		caption: 'Responsive Web\nDesign',
	},
	{
		src: require('../../assets/images/skills/python.svg').default,
		caption: 'Python\n(backend)',
	},
]

const SkillsSection = () => {
	return (
		<section className={`${styles.skills} page__skills`}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					skills that allow me to create beautiful and functional web interfaces
				</h2>
				<Swiper
					spaceBetween={16}
					speed={3000}
					loop={true}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
					}}
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
					className={styles.slider}
				>
					{skills.map((skill, idx) => (
						<SwiperSlide key={idx} className={styles.item}>
							<div className={styles.image}>
								<img src={skill.src} alt='skill' />
								<div className={styles.caption}>
									{skill.caption.split('\n').map((line, index) => (
										<span key={index}>
											{line}
											{index < skill.caption.split('\n').length - 1 && <br />}
										</span>
									))}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default SkillsSection
