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
						This project is a collaboration between the University of Western Australia, CORE Innovation Hub and METS Ignited In 2018 the
						System Health Lab (SHL) received a $100K grant from the Australian Government’s METS Ignited Collaborative Project Fund for the
						LivingLab@UWA program. This is a collaboration between CORE Innovation Hub, the UWA Facilities Management group, and the SHL
						with support from the BHP Strategy and Innovation group to support startups to conduct product site trials at UWA as a critical
						step to a mine site trial. The trials will be managed by students working in the SHL providing invaluable project management and
						technical experience.
					</h5>
					<Button color='primary' size='md' href='/about'>
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
