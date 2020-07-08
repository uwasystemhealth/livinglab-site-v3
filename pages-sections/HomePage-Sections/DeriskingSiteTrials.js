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
						Innovators find it difficult to access sites to prove up results and Miners are averse to trialling/ introducing innovation
						without proven results. This is called the ‘Valley of Death’. Our mission is to help bridge this. Following extensive
						consultation with mining companies, SME’s and entrepreneurs we have developed a roadmap of checklists and physical tests to help
						derisk your first site trial.
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
