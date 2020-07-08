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
			<a className={productClasses.anchor} id='accelerated-life-testing'></a>
			<h2 className={classes.title}>Accelerated Life Testing</h2>
			<GridContainer direction='row-reverse'>
				<GridItem xs={12} sm={12} md={8}>
					<h5 className={classes.description}>
						Accelerated aging and testing is used to simulate product failure in a short period of time, ideally before the products are in
						the marketplace. Traditionally, it uses unusually high levels of environmental conditions to speed up the aging processes using
						a standard test methodology.
					</h5>
					<h5 className={classes.description}>
						The Living Lab has access to a wide range of expensive test equipment on the UWA Campus as well as the ability to design/
						repurpose equipment for specific accelerated life trials.
					</h5>
					<h5 className={classes.description}>Check out the types of accelerated testing we do.</h5>
					<Button color='info' href='/accelerated-life-testing'>
						More About <br /> Accelerated Life Testing Equipment
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
