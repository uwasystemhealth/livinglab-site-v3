import React, { Fragment } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const PrivacyPolicyContent = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.section}>
				<h2 className={classes.title}>Information we collect</h2>
				<h5 className={classes.description}>
					When you visit our website, we do not collect information regarding your browsing information. However, if you fill in and
					submitted the contact form, we will be collecting information limited to:
					<ul>
						<li>Your Business Information such as: Business Name, Business Website, Business Mailing Address</li>
						<li>Your Contact Information such as: Contact Name, Contact Phone, Contact Email</li>
						<li>Your activities in this website facilitated by Google Analytics </li>
					</ul>
				</h5>
			</div>
			<div className={classes.section}>
				<h2 className={classes.title}>How We Store Information</h2>
				<h5 className={classes.description}>
					We do not keep information that we no longer need for the purpose it was collected, unless the law requires us to do so. It is
					either destroyed or de-identified as required under the Archives Act 1983. Only authorised personnel can access personal
					information stored by us.
				</h5>
				<h5 className={classes.description}>
					Security features protect it from unauthorised access. We store information in different ways, including:
					<ul>
						<li>our document and records management systems</li>
						<li>cloud storage</li>
					</ul>
					Furthermore, we do not store nor use cookies.
				</h5>
			</div>
		</Fragment>
	);
};

export default PrivacyPolicyContent;
