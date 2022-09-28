import React from 'react'

import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<h6 className={styles.heading}>TAMBIÉN</h6>
			<div className={styles.contacts}>
				<a href="#" className={styles.link}>Instagram</a>
				<a href="#" className={styles.link}>Facebook</a>
				<a href="#" className={styles.link}>Twitter</a>
				<a href="#" className={styles.link}>YouTube</a>
			</div>
			<p className={styles.copyrights}>
				Copyright © Your Website 2022.
			</p>
		</footer>
	)
}

export default Footer