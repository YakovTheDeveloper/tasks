import React from 'react'

import styles from './HomePage.module.scss'

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GridContent from '../../components/GridContent/GridContent';

import { gridContentData } from '../../data/data';

const HomePage = () => {
	return (
		<>
			<Header />
			<GridContent content={gridContentData}/>
			<div className={styles.parallax}>
				Donec vel rhoncus mi.
			</div>
			<Footer />
		</>
	)
}

export default HomePage