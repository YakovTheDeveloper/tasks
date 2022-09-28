import React from 'react'

import styles from './GridContent.module.scss'

import GridItem from '../../components/GridItem/GridItem';

import { shuffleArray } from '../../utils/shuffleArray';

const GridContent = ({ content }) => {
	return (
		<section className={styles.container}>
			{shuffleArray(content).map((item, i) => <GridItem
				key={i}
				text={item.text}
				heading={item.heading}
				src={item.src}
				showTextOnHover={item.showTextOnHover}
				color={item.color}
			/>)}
		</section>
	)
}

export default GridContent