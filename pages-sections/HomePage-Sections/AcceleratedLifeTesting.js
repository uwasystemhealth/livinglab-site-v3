import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import productStyles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);
const productUseStyles = makeStyles(productStyles);

const HomepageALT = () => {
	const classes = useStyles();
	const productClasses = productUseStyles();
	return (
		<div className={classes.section}>
			<a className={productClasses.anchor} id='accelerated-life-testing'></a>
			<h2 className={classes.title}>Accelerated Life Testing</h2>
			<GridContainer direction='row-reverse'>
				<GridItem xs={12} sm={12} md={8}>
					<h5 className={classes.description}>
						Accelerated aging and testing is used to simulate product failure in an accelerated time frame, ideally before the products are
						in the marketplace. Traditionally, it uses exaggerated environmental conditions to speed up the aging processes using a
						standardised test methodology.
					</h5>
					<h5 className={classes.description}>
						The Living Lab has access to a wide range of specialist testing equipment on the UWA campuses as well as the ability to design
						or repurpose equipment for specific accelerated life trials for your product. Check out the types of accelerated life testing we
						do.
					</h5>
					<h5 className={classes.description}>Check out the types of accelerated testing we do.</h5>
					<GridContainer justify='center' alignItems='center'>
						<Button color='primary' href='/accelerated-life-testing'>
							More <br /> Accelerated Life Testing Equipment
						</Button>
						<Button color='success' href='/roadmap/accelerated-life-testing'>
							More <br /> Accelerated Life Testing Partner Roadmap
						</Button>
					</GridContainer>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<img src='/img/accelerated-life-testing/accelerated-bearing-failure-testing/methodology.jpg' alt='' className={classes.img} />
				</GridItem>
			</GridContainer>
			<br />
		</div>
	);
};

export default HomepageALT;
