import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons components
import Book from '@material-ui/icons/Book';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import productStyles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);
const productUseStyles = makeStyles(productStyles);

const About = () => {
	const classes = useStyles();
	const productClasses = productUseStyles();
	return (
		<div className={classes.section}>
			<a className={productClasses.anchor} id='derisking-site-trials'></a>
			<h2 className={classes.title}>Derisking Site Trials</h2>
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<h5 className={classes.description}>
						The METS Ignited Mining Innovation Part 1: Imperatives and Barriers published in March 2017 identified one of the sector’s key
						challenges as “innovators find it difficult to access sites to prove up results and Miners are averse to trialling/introducing
						innovation without proven results”. In response to this METS Ignited has funded this Living Lab project. We have developed a
						pre-test facility and supporting processes that:
						<ol>
							<li>is easy to access for the innovator, notably small-to-medium-sized enterprise (SME);</li>
							<li>supports completion of industry-equivalent HSE and risk assessments; and </li>
							<li>provides a realistic pre-mine site testing environment. </li>
						</ol>
					</h5>
					<Button color='success' href='/roadmap/derisking-site-trials'>
						More About <br />
						Derisking Site Trials
					</Button>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<img src='https://picsum.photos/400/400' alt='' className={classes.img} />
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default About;
