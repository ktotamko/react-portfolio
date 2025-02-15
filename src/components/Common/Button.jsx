// src/components/Common/Button.jsx
import React from 'react'
import cx from 'classnames'
import styles from './Button.module.css'

/**
 * Props:
 * - children: The content inside the button.
 * - dark: Boolean; if true, applies the alternative dark style.
 * - onClick: Click handler.
 * - ...props: Other standard button props.
 */
const Button = ({ children, dark, onClick, ...props }) => {
	return (
		<button
			className={cx(styles.button, dark && styles.buttonDark)}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
