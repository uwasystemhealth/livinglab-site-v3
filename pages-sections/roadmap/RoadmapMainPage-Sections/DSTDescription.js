import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const DSTDescription = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>Partner Roadmap</h2>
			<h5 className={classes.description}>
				The METS Ignited Mining Innovation Part 1: Imperatives and Barriers (March 2017) identified one of the sector’s key challenges as
				<em>
					“innovators find it difficult to access sites to prove up results and resources companies are averse to trialling/introducing
					innovation without proven results”
				</em>
				. The Living Lab @UWA aims to address this challenge. We have developed a pre-test facility, support team and process that:
				<ol>
					<li>is easy to access for the innovator, notably small-to-medium-sized enterprises (SME);</li>
					<li>supports completion of industry-equivalent HSE and risk assessments; and </li>
					<li>provides a realistic pre-mine site testing environment. </li>
				</ol>
			</h5>
			<h5 className={classes.description}>
				<strong>
					Our Partner Roadmap for Derisking Site Trials is a comprehensive testing plan that assesses your product from design intent
					through to final test results reporting.
				</strong>
			</h5>
		</div>
	);
};

export default DSTDescription;
