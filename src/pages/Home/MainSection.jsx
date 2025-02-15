// src/pages/Home/MainSection.jsx
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Button from '../../components/Common/Button'
import Title from '../../components/Common/Title'
import Text from '../../components/Common/Text'
import styles from './MainSection.module.css'
import phoneDark from '../../assets/images/main/phone.svg'
import phoneLight from '../../assets/images/main/phone-light.svg'
import Container from '../../components/Container/Container'

const MainSection = () => {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	})

	return (
		<section ref={ref} className={`${styles.main} page__main`}>
			<Container>
				<div className={styles.container}>
					<div className={styles.body}>
						<div className={styles.content}>
							<header className={styles.headerMain}>
								<Title active={inView}>
									Hello, I'm <span>Nicholas U</span>.
								</Title>
								<h1 className={styles.subtitle}>
									your new <span>Developer</span>!
								</h1>
								<Text active={inView}>
									Let's collaborate to create something amazing or elevate your
									existing project to new heights.
								</Text>
								<div className={styles.actions}>
									<Link to='/portfolio' className={styles.buttonLink}>
										<Button>See my work</Button>
									</Link>
									<Link to='/contact' className={styles.buttonLink}>
										<Button dark>Start Now</Button>
									</Link>
								</div>
							</header>
						</div>
						<div
							className={`${styles.images} ${
								inView ? styles.activeImages : ''
							}`}
						>
							<img src={phoneDark} alt='phone' className={styles.phoneDark} />
							<img src={phoneLight} alt='phone' className={styles.phoneLight} />
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default MainSection
