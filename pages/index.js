// NEXT + REACT
import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material -ui/icon components
import Timer from '@material-ui/icons/Timer';
import Assessment from '@material-ui/icons/Assessment';

// CORE COMPONENTS
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

// SECTIONS
import About from 'pages-sections/HomePage-Sections/About.js';
import Partners from 'pages-sections/HomePage-Sections/Partners.js';
import AcceleratedLifeTesting from 'pages-sections/HomePage-Sections/AcceleratedLifeTesting.js';
import DeriskingSiteTrials from 'pages-sections/HomePage-Sections/DeriskingSiteTrials.js';
import CaseStudies from 'pages-sections/HomePage-Sections/CaseStudies.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';

const useStyles = makeStyles(styles);

const index = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Parallax filter responsive image={require('assets/img/homepage.jpg')}>
				<div className={classes.container}>
					<h1 className={classes.title}>Living Lab</h1>
					<h4>
					From 2020-2022 a team of engineers in the System Health Lab at UWA developed and executed Accelerated Life Tests for MEM-IoT products. This work was funded by METS Ignited and the BHP Fellowship and supported by the UWA Workshop and Facilities Management. This website captures information about the project as a record of what was done and the work-integrated learning opportunity provided to the students that participated. We hope this will inspire other universities to leverage their equipment, technical workshop staff and students for similar puporse to help other Australian innovators to de-risk their MEMS-IOT products.
					</h4>
					<br />
					<Button href='#accelerated-life-testing' color='primary' size='lg'>
						<Timer></Timer>
						Accelerated Life Testing
					</Button>
					<Button href='#derisking-site-trials' color='success' size='lg'>
						<Assessment></Assessment>
						Derisking Site Trials
					</Button>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<About></About>
				</div>
				<Partners></Partners>
				<div className={classes.container}>
					<AcceleratedLifeTesting></AcceleratedLifeTesting>
					<DeriskingSiteTrials></DeriskingSiteTrials>
					<CaseStudies></CaseStudies>
				</div>
			</div>
		</Fragment>
	);
};

export default index;
