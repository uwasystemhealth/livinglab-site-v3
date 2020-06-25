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
import ALTDescription from 'pages-sections/accelerated-life-testing/AcceleratedLifeTesting-Sections/Description.js';
import Testings from 'pages-sections/accelerated-life-testing/AcceleratedLifeTesting-Sections/Testings.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
const useStyles = makeStyles(styles);

const AcceleratedLifeTesting = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/landing-bg.jpg')}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>Roadmap</h1>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<ALTDescription></ALTDescription>
					<Testings></Testings>
				</div>
			</div>
		</Fragment>
	);
};

export default AcceleratedLifeTesting;
