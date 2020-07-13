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
				The METS Ignited Mining Innovation Part 1: Imperatives and Barriers published in March 2017 identified one of the sector’s key
				challenges as “innovators find it difficult to access sites to prove up results and resources companies are averse to
				trialling/introducing innovation without proven results”. In response to this METS Ignited has funded this Living Lab project. We
				have developed a pre-test facility and supporting processes that:
				<ol>
					<li>is easy to access for the innovator, notably small-to-medium-sized enterprise (SME);</li>
					<li>supports completion of industry-equivalent HSE and risk assessments; and </li>
					<li>provides a realistic pre-mine site testing environment. </li>
				</ol>
			</h5>
			<h5 className={classes.description}>The details for working with the Living Lab for Derisking Site Trials can be seen below.</h5>
		</div>
	);
};

export default DSTDescription;
