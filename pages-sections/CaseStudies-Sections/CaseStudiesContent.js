import React, { Fragment } from 'react';
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
		<Fragment>
			<div className={classes.section}>
				<h2 className={classes.title}>Work In Progress</h2>
				<h5 className={classes.description}>
					Hi There! This page is currently work in progress. Check this out soon, but in the meantime, please check out the other pages in the website.
				</h5>
			</div>

		</Fragment>
	);
};

export default About;