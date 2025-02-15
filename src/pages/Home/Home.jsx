// src/pages/Home/Home.jsx
import React from 'react'
import MainSection from './MainSection'
//import SkillsSection from './SkillsSection'
import PortfolioSection from './PortfolioSection'
import ContactSection from './ContactSection'
import styles from './Home.module.css'

const Home = () => {
	return (
		<>
				<div className={styles.page}>
					<MainSection />
					{/*<SkillsSection />*/}
					<PortfolioSection />
					<ContactSection />
				</div>
		</>
	)
}

export default Home
