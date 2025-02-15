// src/components/Common/Title.jsx
import React from 'react'
import styles from './Title.module.css'

const Title = ({ children, className, active, ...props }) => {
	return (
		<h1
			className={`${styles.title} ${active ? styles.active : ''} ${
				className || ''
			}`}
			{...props}
		>
			{children}
		</h1>
	)
}

export default Title

