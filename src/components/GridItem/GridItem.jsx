import React from 'react'

import styles from './GridItem.module.scss'

import { GRID_ITEM_COLORS } from '../../constants/styles'

const colorToClassMapping = new Map([
	[GRID_ITEM_COLORS.blue, styles.blue],
	[GRID_ITEM_COLORS.green, styles.green]
])

const GridItem = ({
	src,
	alt = "content image",
	text,
	heading,
	showTextOnHover,
	color
}) => {
	const colorClass = colorToClassMapping.get(color)
	return (
		<div className={styles.container}>
			{src && <img
				src={src}
				alt={alt}
				className={styles.image}
			/>}
			{text &&
				<div className={`${colorClass} ${styles.textContent} ${!showTextOnHover ? styles.alwaysShow : ""}`}>
					<h2 className={styles.heading}>
						{heading}
					</h2>
					{text}
				</div>
			}
		</div>
	)
}

export default GridItem