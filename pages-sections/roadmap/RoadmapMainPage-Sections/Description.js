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
			<h2 className={classes.title}>Roadmap</h2>
			<h5 className={classes.description}>
				Some Text HereSome Text HereSome Text HereSome Text HereSome Text HereSome Text HereSome Text HereSome Text HereSome Text HereSome
				Text HereSome Text HereSome Text HereSome Text HereSome Text Here Some Text Here Some Text HereSome Text HereSome Text Here
			</h5>
		</div>
	);
};

export default ALTDescription;
