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

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';

const useStyles = makeStyles(styles);

const index = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Parallax filter responsive image={require('assets/img/landing-bg.jpg')}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>Living Lab</h1>
							<h3>We Are A Team Of Engineers Ready To Help</h3>
							<br />
							<Button href='/roadmap/accelerated-life-testing' color='primary' size='lg'>
								<Timer></Timer>
								Accelerated Life Testing
							</Button>
							<Button href='/roadmap/derisking-site-trials' color='primary' size='lg'>
								<Assessment></Assessment>
								Derisking Site Trials
							</Button>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<About></About>
				</div>
			</div>
		</Fragment>
	);
};

export default index;
