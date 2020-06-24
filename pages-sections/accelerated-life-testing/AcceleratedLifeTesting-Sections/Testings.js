import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

// OWN COMPONENTS
import TestingCard from 'components/accelerated-life-testing/TestingCard.js';

// CONTENT
import TestingData from 'data/AcceleratedLifeTestingContent.json';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const Testings = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<GridContainer>
				{TestingData.map(({ title, backgroundImage, whatIsIt }) => (
					<GridItem sm={12} md={6} key={title}>
						<TestingCard title={title} img={backgroundImage} description={whatIsIt}></TestingCard>
					</GridItem>
				))}
			</GridContainer>
		</div>
	);
};

export default Testings;
