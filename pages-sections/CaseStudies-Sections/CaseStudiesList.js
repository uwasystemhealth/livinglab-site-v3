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
import CSCard from 'components/case-studies/CSCard.js';
import CSModal from 'components/case-studies/CSModal.js';

// CONTENT
import CaseStudiesData from 'data/CaseStudies.json';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const getTestObject = (router) => {
	const { caseStudyName } = router.query;
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const object = CaseStudiesData.find(({ title }) => caseStudyName === title.toLowerCase().replace(/ /g, '-'));
	if (object) {
		return object;
	} else if (typeof window !== 'undefined') {
		// SERVER SIDE ONLY
		router.push('/');
	}
};

const Testings = () => {
	const router = useRouter();
	const caseObject = !!router.query.caseStudyName ? getTestObject(router) : null;

	const closeTestModal = () => {
		router.push('/case-studies');
	};

	const classes = useStyles();
	return (
		<Fragment>
			<CSModal isModalOpen={!!router.query.caseStudyName} {...caseObject} closeModal={closeTestModal}></CSModal>
			<div className={classes.section}>
				<h2 className={classes.title}>Check Out Some Of Our Work</h2>
				<h5 className={classes.description}></h5>
				<GridContainer>
					{CaseStudiesData.map(({ title, backgroundImage = 'img/feature-bg.jpg', whatIsIt = '', workInProgress = null }) => (
						<GridItem sm={12} md={6} key={title}>
							<CSCard title={title} img={backgroundImage} description={whatIsIt} workInProgress={workInProgress}></CSCard>
						</GridItem>
					))}
				</GridContainer>
			</div>
		</Fragment>
	);
};

export default Testings;
