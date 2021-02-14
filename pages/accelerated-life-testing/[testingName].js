import React from 'react';
import { stringToLink } from 'helpers/validation';

// OWN COMPONENT
import TestingPageContent from 'components/accelerated-life-testing/TestingPageContent.js';

// CONTENT
import TestingData from 'data/AcceleratedLifeTestingContent.js';

const getTestObject = (testingName) => {
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const object = TestingData.find(({ title }) => testingName === stringToLink(title));
	return object;
};

const TestingEquipmentPage = ({ testObject }) => {
	return <TestingPageContent {...testObject} />;
};

// FETCHES THE STATIC PROPERTIES BASED ON THE ROUTING CONTEXT
export async function getStaticProps(context) {
	const { testingName } = context.params;
	const testObject = getTestObject(testingName);
	return {
		props: {
			testObject,
		},
	};
}

// VALIDATES THE VALID PATHS FOR THE DYNAMIC ROUTE
export async function getStaticPaths() {
	const testingAvailable = TestingData.filter(({ workInProgress = null }) => !workInProgress);
	return {
		paths: testingAvailable.map(({ title }) => ({ params: { testingName: stringToLink(title) } })),
		fallback: false,
	};
}

export default TestingEquipmentPage;
