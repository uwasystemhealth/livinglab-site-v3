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

const useStyles = makeStyles(styles);

const About = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>About Us</h2>
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<h5 className={classes.description}>
						The Living Lab program is run by a team of engineers, coders and project managers employed by the UWA System Health Lab (SHL),
						CORE Innovation Hub and UWA Facilities Management. The design, execution and evaluation of the test work is done by students in
						collaboration with the client and supported by academic and professional staff. Participation in the program delivers real life
						engineering experience to the students involved.
					</h5>
					<h5 className={classes.description}>
						In 2018 the Living Lab program received a $100K grant from the Australian Government’s METS Ignited Collaborative Project Fund
						and another $100k from the BHP Fellowship for Engineering for Remote Operations. Our aim is to accelerate the path to market for
						IOT related products by providing accelerated life tests and real-life trials.
					</h5>
					<Button color='rose' href='/about'>
						<Book></Book>
						More
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
