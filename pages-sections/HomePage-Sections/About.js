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
						<strong>The Living Lab @UWA</strong> is a team of engineers equipped to help innovators test and prepare products for trial to
						resources company customers.
					</h5>
					<h5 className={classes.description}>
						In 2018, <a href='https://metsignited.org/'>METS Ignited</a>, the Australian Industry Growth Centre for Mining Equipment,
						Technology and Services, issued a call for interest to develop real or near real-world testing environments to form a network of
						“Living Labs” across Australia.{' '}
						<strong>
							Supported by METS Ignited, BHP Fellowship, UWA and CORE Innovation Hub, the Living Lab @UWA is the first of these.
						</strong>
					</h5>
					<h5 className={classes.description}>
						The Living Lab is run by engineers, coders and project managers from{' '}
						<a href='https://systemhealthlab.com/'>UWA System Health Lab</a> (SHL),{' '}
						<a href='https://www.corehub.com.au/'>CORE Innovation Hub</a> and{' '}
						<a href='https://www.uwa.edu.au/'>UWA Facilities Management</a>.
					</h5>
					<h5 className={classes.description}>
						We <strong>accelerate your path to market</strong> for IoT-related products by providing Accelerated Life Testing and a
						real-life trials. We <strong>design, build and execute bespoke testing equipment and tests</strong> to try and fail your
						products by generating realistic failure modes in an accelerated time scale. We have{' '}
						<strong>procedures and legal agreement templates to enable testing</strong> and can help you deploy them.
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
