// NEXT + REACT
import React, { Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// CORE COMPONENTS
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

// SECTIONS
import ALTDescription from 'pages-sections/accelerated-life-testing/AcceleratedLifeTesting-Sections/Description.js';
import Testings, { MoreAboutPathway } from 'pages-sections/accelerated-life-testing/AcceleratedLifeTesting-Sections/Testings.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
const useStyles = makeStyles(styles);

const AcceleratedLifeTesting = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/accelerated-life-testing-equipment.jpg')}>
				<div className={classes.container}>
					<h1 className={classes.title}>Accelerated Life Testing Equipment</h1>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<ALTDescription></ALTDescription>
					<Testings></Testings>
					<MoreAboutPathway></MoreAboutPathway>
				</div>
			</div>
		</Fragment>
	);
};

export default AcceleratedLifeTesting;
