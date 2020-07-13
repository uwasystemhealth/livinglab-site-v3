import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Button from 'components/MaterialKit/CustomButtons/Button.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const ALTDescription = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>What is it?</h2>
			<h5 className={classes.description}>
				The Accelerated Life Testing (ALT) roadmap is a comprehensive testing plan that asseses your product from design intent through to
				final test results report.
			</h5>
			<h5 className={classes.description}>
				The first stage is for us to understand the needs of your company and the product you would like to test, and for you to understand
				the mission and capabilities of the Living Lab team.
			</h5>
			<h5 className={classes.description}>
				Next you and The LivingLab sign a non-disclosure agreement so that you can safely communicate details with us.
			</h5>
			<h5 className={classes.description}>
				Finally, we need to understand in detail what your product does, its functional specifications and the environment in which it will
				be deployed.
			</h5>
			<h5 className={classes.description}>
				We will then form a joint team to work on developing the test procedures. This is done in a collaborative on-line environment
				enabling ease of communication between team members. Once drafted, the test procedures are approved and executed. Results are
				rapidly shared with the team members. A final report is co-drafted by the team.
			</h5>
			<Button color='primary' href='/accelerated-life-testing'>
				More About <br /> Accelerated Life Testing Equipment
			</Button>
		</div>
	);
};

export default ALTDescription;
