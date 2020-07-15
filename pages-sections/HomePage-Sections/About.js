import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons components
import Book from '@material-ui/icons/Book';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

//OWN COMPONENTS
import Collage from 'components/Team/Collage.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const HomepageAbout = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>About Us</h2>
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<h5 className={classes.description}>
						The Living Lab are a team of engineers ready to help innovators test and prepare their products for trial to resource company
						customers. In 2018 METS Ignited issued a call for interested parties to develop real or near real-world testing environments to
						form a network of “Living Labs” across Australia. The METS Ignited-BHP Fellowship-UWA-CORE supported Living Lab@UWA is the first
						of these.
					</h5>
					<h5 className={classes.description}>
						The Living Lab program is run by a team of engineers, coders and project managers employed by the UWA System Health Lab (SHL),
						CORE Innovation Hub and UWA Facilities Management. We accelerate the path to market for IOT related products by providing
						accelerated life tests and real-life trials.
					</h5>
					<h5 className={classes.description}>
						We design, build and execute bespoke testing equipment and tests to try and fail your products by generating realistic failure
						modes in an accelerated time scale. We have procedures and legal agreement templates to enable testing and are here to help you
						deploy them.
					</h5>
					<Button color='rose' href='/about'>
						<Book></Book>
						More About Us
					</Button>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<Collage></Collage>
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default HomepageAbout;
