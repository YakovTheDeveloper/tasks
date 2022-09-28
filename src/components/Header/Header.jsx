import React, { useState, useRef } from 'react'
import styles from './Header.module.scss'
import { useOutsideClick } from '../../hooks/useOutsideClick'

const categories = [
	'strategy', 'branding', 'copywriting',
	'webdesign', '3d', 'webflow development',
	'e-commerce', 'courses'
]

const Header = () => {
	const [isInfoOpened, setIsInfoOpened] = useState(false)
	const infoPanelRef = useRef()
	useOutsideClick(() => setIsInfoOpened(false), infoPanelRef)

	const onBtnClick = (e) => {
		e.stopPropagation()
		if (isInfoOpened) {
			setIsInfoOpened(false)
			return
		}
		setIsInfoOpened(true)
	}

	const InfoButton = (
		<button
			onClick={onBtnClick}
			className={styles.infoBtn}
		>{isInfoOpened ? "Close" : "Info"}
		</button>
	)

	const ProjectLogoElement = <div className={styles.author}>
		<a href="#" className={styles.authorLink}>TAMBIÉN</a>
		<span className={styles.authorDescription}>
			Project Courses, Youtube
		</span>
	</div>

	const adaptiveUpperBar = <div className={styles.aboutBar}>
		{ProjectLogoElement}
		{InfoButton}
	</div>

	return (
		<header className={`${styles.container} 
	`}>
			{adaptiveUpperBar}
			<div className={`${styles.inner} ${isInfoOpened ? styles.headingMoved : ""}`} >
				<div className={styles.side}>
					{ProjectLogoElement}
				</div>
				<div className={styles.main}>
					<div className={styles.headingContainer}>
						<ul className={styles.sideCategories}>
							{categories.map(category =>
								<li className={styles.categoryItem} key={category}>
									{category.toLowerCase()}
								</li>)}
						</ul>
						<h1 className={styles.heading}>
							<span className={styles.headingText}>DESIGN</span>
							<span className={styles.headingText}>THE CHANGE</span>
							<span className={styles.headingText}>YOU WANNA SEE</span>
						</h1>
					</div>
					<div>
					</div>
				</div>
				<div className={styles.side}>
					{InfoButton}
				</div>
			</div>
			<aside
				className={`${styles.infoSidePanel} ${isInfoOpened ? styles.infoSidePanelOpened : ""}`}
				ref={infoPanelRef}
			>
				{isInfoOpened &&
					<button
						className={styles.closeBtn}
						onClick={onBtnClick}>Close
					</button>
				}
				<h2 className={styles.heading}>Lorem ipsum dolor sit amet</h2>
				<p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit justo, varius nec aliquam et, malesuada et enim. Integer gravida pharetra nisi, et feugiat metus laoreet vitae. Aenean sed arcu nec neque malesuada ultrices. Donec quis bibendum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dignissim, est in euismod tristique, lacus erat vulputate augue, quis euismod nulla elit eu magna. Mauris nec eros purus. Mauris massa metus, elementum a ipsum a, cursus egestas dui. Donec suscipit neque rhoncus, eleifend sem et, luctus risus.</p>
				<p className={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elit justo, varius nec aliquam et, malesuada et enim. Integer gravida pharetra nisi, et feugiat metus laoreet vitae. Aenean sed arcu nec neque malesuada ultrices. Donec quis bibendum nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dignissim, est in euismod tristique, lacus erat vulputate augue, quis euismod nulla elit eu magna. Mauris nec eros purus. Mauris massa metus, elementum a ipsum a, cursus egestas dui. Donec suscipit neque rhoncus, eleifend sem et, luctus risus.</p>
			</aside>
		</header>
	)
}

export default Header