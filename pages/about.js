// NEXT + REACT
import React, { Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// CORE COMPONENTS
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

// SECTIONS
import AboutLivingLab from 'pages-sections/AboutPage-Sections/AboutLivingLab.js';
import MeetTheTeam from 'pages-sections/AboutPage-Sections/MeetTheTeam.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
const useStyles = makeStyles(styles);

const About = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/about.jpg')}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>More About Us</h1>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<AboutLivingLab></AboutLivingLab>
					<MeetTheTeam></MeetTheTeam>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
