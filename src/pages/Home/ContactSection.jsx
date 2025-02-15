// src/pages/Home/ContactSection.jsx
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Title from '../../components/Common/Title'
import Text from '../../components/Common/Text'
import Button from '../../components/Common/Button'
import styles from './ContactSection.module.css'

const ContactSection = () => {
	// Use intersection observer to trigger animation
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	})

	return (
		<section ref={ref} className={`${styles.contact} page__start`}>
			<Container>
				<div className={`${styles.container} ${inView ? styles.active : ''}`}>
					<div className={styles.body}>
						<div className={styles.column}>
							<Title
								className={`${styles.title} ${inView ? styles.active : ''}`}
							>
								Still have a question?
							</Title>
							<Text className={`${styles.text} ${inView ? styles.active : ''}`}>
								Can't find the answer you're looking for? Simply leave your
								contact details, and I'll get in touch with you.
							</Text>
						</div>
						<div className={styles.column}>
							<div className={styles.actions}>
								<Link to='/contact' className={styles.buttonLink}>
									<Button>Get in touch</Button>
								</Link>
								<Link to='/contact' className={styles.buttonLink}>
									<Button dark>Let's Connect</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default ContactSection
