import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons components
import Book from '@material-ui/icons/Book';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

// DATA
import CaseStudies from 'data/CaseStudies.js';
const HomepageCS = () => {
	const classes = useStyles();
	const { title, videoLink } = CaseStudies[0]; // SELECT TO DISPLAY WHAT CASE STUDY
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>Our Work</h2>
			<GridContainer direction='row-reverse'>
				<GridItem>
					<h5 className={classes.description}>
						Watch this video for an example of the type of testing we can set up for you and your MEMS-IoT based sensing system.
					</h5>
				</GridItem>
				<GridItem>
					<br />
					<iframe title={title} className={classes.video} src={videoLink} allowFullScreen='allowFullScreen'></iframe>
					<br />
				</GridItem>
				<GridItem style={{ marginTop: 50 }}>
					<Button color='primary' href='/case-studies'>
						<Book></Book>
						More Case Studies
					</Button>{' '}
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default HomepageCS;
