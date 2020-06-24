// NEXT + REACT
import React, { Component, Fragment } from 'react';
import { useRouter } from 'next/router';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// CORE COMPONENTS
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

// CONTENT
import TestingData from 'data/AcceleratedLifeTestingContent.json';

import landingStyles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
import productStyles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStylesLanding = makeStyles(landingStyles);
const useStylesProduct = makeStyles(productStyles);

const getTestObject = (router) => {
	const { testingName } = router.query;
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	return TestingData.find(({ title }) => testingName === title.toLowerCase().replace(/ /g, '-'));
};

const About = () => {
	const router = useRouter();
	const {
		title,
		backgroundImage,
		whatIsIt,
		whatEquipmentsAreInvolved,
		whatEquipmentsAreInvolvedImage,
		methodology,
		methodologyImage,
		limitations,
		limitationsImage,
	} = getTestObject(router);
	const landingClasses = useStylesLanding();
	const productClasses = useStylesProduct();
	return (
		<Fragment>
			<Parallax small filter responsive image={backgroundImage}>
				<div className={landingClasses.container}>
					<h1 className={landingClasses.title}>{title}</h1>
				</div>
			</Parallax>
			<div className={classNames(landingClasses.main, landingClasses.mainRaised)}>
				<div className={landingClasses.container}>
					<div className={productClasses.section}>
						<h2 className={productClasses.title}>What is It?</h2>
						<h5 className={productClasses.description}>{whatIsIt}</h5>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
