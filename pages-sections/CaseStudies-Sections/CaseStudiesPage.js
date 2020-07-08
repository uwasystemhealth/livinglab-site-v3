// NEXT + REACT
import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// CORE COMPONENTS
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

// SECTIONS
import Content from 'pages-sections/CaseStudies-Sections/CaseStudiesContent.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
const useStyles = makeStyles(styles);

const CaseStudies = ({ title, description, videoLink }) => {
	const classes = useStyles();
	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/landing-bg.jpg')}>
				<div className={classes.container}>
					<h1 className={classes.title}>
						Case Study: <br />
						{title}
					</h1>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<Content description={description} videoLink={videoLink}></Content>
				</div>
			</div>
		</Fragment>
	);
};

export default CaseStudies;
