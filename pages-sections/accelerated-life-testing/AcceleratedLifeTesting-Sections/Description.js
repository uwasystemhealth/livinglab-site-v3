import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const ALTDescription = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>Accelerated Life Testing with the Living Lab</h2>
			<h5 className={classes.description}>
				Accelerated Lifecycle Testing (ALT) is used to simulate the environmental and operational conditions expected over the lifecycle of
				a product in an accelerated time-frame.
			</h5>
			<h5 className={classes.description}>
				This test will identify how the product should perform over its lifecycle and the likely failure modes under conditions it will
				experience.
			</h5>
			<h5 className={classes.description}>
				The Living Lab has access to a wide range of test equipment on the UWA campuses as well as the ability to design and repurpose
				equipment for specific accelerated life trials.
			</h5>
		</div>
	);
};

export default ALTDescription;
