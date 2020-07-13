import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/icons components

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const HomepageAbout = () => {
	const classes = useStyles();
	const LOGOS = [
		require('assets/img/partners/core.png'),
		require('assets/img/partners/mets.png'),
		require('assets/img/partners/shl.png'),
		require('assets/img/partners/uwa.png'),
	];
	return (
		<div className={classes.section} className={classes.partnersSection}>
			<h2 className={classNames(classes.title)}>Our Partners</h2>
			<GridContainer justify='center' alignItems='center'>
				{LOGOS.map((logo, index) => (
					<GridItem key={index} xs={6} sm={6} md={3} style={{ textAlign: 'center' }}>
						<img src={logo} alt='' className={classes.partnersLogo} />
					</GridItem>
				))}
			</GridContainer>
		</div>
	);
};

export default HomepageAbout;
