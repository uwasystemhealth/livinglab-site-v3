import React, { Fragment } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const CaseStudiesContent = ({ description, videoLink }) => {
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.section}>
				<GridContainer>
					<GridItem xs={12} md={6}>
						<h5 className={classes.description}>{description}</h5>
					</GridItem>
					<GridItem xs={12} md={6}>
						<iframe className={classes.video} src={videoLink} allowFullScreen='allowFullScreen'></iframe>
					</GridItem>
				</GridContainer>
			</div>
		</Fragment>
	);
};

export default CaseStudiesContent;
