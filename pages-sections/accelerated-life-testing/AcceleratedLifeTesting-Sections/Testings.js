import React, { useState, Fragment } from 'react';
import { useRouter } from 'next/router';
import { stringToLink } from 'helpers/validation';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

// OWN COMPONENTS
import TestingCard from 'components/accelerated-life-testing/TestingCard.js';
import TestingModal from 'components/accelerated-life-testing/TestingModal.js';

// CONTENT
import TestingData from 'data/AcceleratedLifeTestingContent.json';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

// GET THE TEST OBJECT USING THE ROUTER
const getTestObject = (router) => {
	const { testingName } = router.query;
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const object = TestingData.find(({ title }) => testingName === stringToLink(title));
	if (object) {
		return object;
	} else if (typeof window !== 'undefined') {
		// SERVER SIDE ONLY
		router.push('/');
	}
};

const Testings = ({ closeLink = '/accelerated-life-testing' }) => {
	const router = useRouter();
	const testObject = !!router.query.testingName ? getTestObject(router) : null;

	const closeTestModal = (closeLink) => () => {
		router.push(closeLink);
	};

	const classes = useStyles();
	return (
		<Fragment>
			<TestingModal isModalOpen={!!router.query.testingName} {...testObject} closeModal={closeTestModal(closeLink)}></TestingModal>
			<div className={classes.section}>
				<h2 className={classes.title}>Equipment Available</h2>
				<h5 className={classes.description}>
					The following Accelerated Life Testing facilities are available. However, if you have tests that need equipment not described
					below, please talk to us.
				</h5>
				<GridContainer>
					{TestingData.map(({ title, backgroundImage, whatIsIt, workInProgress = null }) => (
						<GridItem sm={12} md={6} key={title}>
							<TestingCard
								title={title}
								img={backgroundImage}
								description={whatIsIt}
								workInProgress={workInProgress}
								preLink={closeLink}
							></TestingCard>
						</GridItem>
					))}
				</GridContainer>
			</div>
		</Fragment>
	);
};

export const MoreAboutPathway = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<GridContainer justify='center' alignItems='center'>
				<Button color='success' href='/roadmap/accelerated-life-testing'>
					More About The Partner Roadmap
				</Button>
			</GridContainer>
		</div>
	);
};

export default Testings;
