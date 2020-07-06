import React, { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

// OWN COMPONENTS
import TestingCard from 'components/accelerated-life-testing/TestingCard.js';
import TestingModal from 'components/accelerated-life-testing/TestingModal.js';

// CONTENT
import TestingData from 'data/AcceleratedLifeTestingContent.json';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const getTestObject = (router) => {
	const { testingName } = router.query;
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const object = TestingData.find(({ title }) => testingName === title.toLowerCase().replace(/ /g, '-'));
	if (object) {
		return object;
	} else if (typeof window !== 'undefined') {
		// SERVER SIDE ONLY
		router.push('/');
	}
};

const Testings = () => {
	const router = useRouter();
	const testObject = !!router.query.testingName ? getTestObject(router) : null;

	const closeTestModal = () => {
		router.push('/accelerated-life-testing');
	};

	const classes = useStyles();
	return (
		<Fragment>
			<TestingModal isModalOpen={!!router.query.testingName} {...testObject} closeModal={closeTestModal}></TestingModal>
			<div className={classes.section}>
				<GridContainer>
					{TestingData.map(({ title, backgroundImage, whatIsIt, workInProgress = null }) => (
						<GridItem sm={12} md={6} key={title}>
							<TestingCard title={title} img={backgroundImage} description={whatIsIt} workInProgress={workInProgress}></TestingCard>
						</GridItem>
					))}
				</GridContainer>
			</div>
		</Fragment>
	);
};

export default Testings;
