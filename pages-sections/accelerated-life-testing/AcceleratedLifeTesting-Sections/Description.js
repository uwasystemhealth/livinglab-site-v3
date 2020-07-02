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
			<h2 className={classes.title}>Testing In The Living Lab</h2>
			<h5 className={classes.description}>
				Accelerated aging and testing is used to simulate product failure in a short period of time, ideally before the products are in the
				marketplace. Traditionally, it uses unusually high levels of environmental conditions to speed up the aging processes using a
				standard test methodology.
			</h5>
			<h5 className={classes.description}>
				The Living Lab has access to a wide range of expensive test equipment on the UWA Campus as well as the ability to design/ repurpose
				equipment for specific accelerated life trials.
			</h5>
			<h5 className={classes.description}>
				We are not an accredited test laboratory and do not seek to compete with these highly specialised, ISO 9001 compliant businesses.
				Our aim is to help the product developer understand the vulnerabilities in their product during the design and prototyping phases so
				their product is compliant when they seek accreditation against Standards.
			</h5>
			<Button color='success' href='/roadmap/accelerated-life-testing'>
				More About Pathway
			</Button>
		</div>
	);
};

export default ALTDescription;
