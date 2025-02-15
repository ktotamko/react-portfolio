// src/components/Common/Text.jsx
import React from 'react'
import styles from './Text.module.css'

const Text = ({ children, className, active, ...props }) => {
	return (
		<p
			className={`${styles.text} ${active ? styles.active : ''} ${
				className || ''
			}`}
			{...props}
		>
			{children}
		</p>
	)
}

export default Text
