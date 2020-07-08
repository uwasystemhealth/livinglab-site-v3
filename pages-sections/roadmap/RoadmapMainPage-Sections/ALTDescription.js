import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Button from 'components/MaterialKit/CustomButtons/Button.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

const ALTDescription = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>What is it?</h2>
			<h5 className={classes.description}>
				Accelerated aging and testing is used to simulate product failure in a short period of time, ideally before the products are in the
				marketplace. Traditionally, it uses unusually high levels of environmental conditions to speed up the aging processes using a
				standard test methodology.
			</h5>
			<h5 className={classes.description}>
				The Living Lab has access to a wide range of expensive test equipment on the UWA Campus as well as the ability to design/ repurpose
				equipment for specific accelerated life trials. Check out the types of accelerated testing we do.
			</h5>
			<Button color='primary' href='/accelerated-life-testing'>
				More About <br /> Accelerated Life Testing Equipment
			</Button>
		</div>
	);
};

export default ALTDescription;
