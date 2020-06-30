import React from 'react';
import Router, { useRouter } from 'next/router';

// OWN COMPONENT
import TestingPageContent from 'components/accelerated-life-testing/TestingPageContent.js';

// CONTENT
import TestingData from 'data/AcceleratedLifeTestingContent.json';

const getTestObject = (testingName) => {
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const object = TestingData.find(({ title }) => testingName === title.toLowerCase().replace(/ /g, '-'));
	return object;
};

const TestingEquipmentPage = ({ testObject }) => {
	return <TestingPageContent {...testObject}></TestingPageContent>;
};

export async function getStaticProps(context) {
	const { testingName } = context.params;
	const testObject = getTestObject(testingName);
	return {
		props: {
			testObject,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: TestingData.map(({ title }) => ({ params: { testingName: title.toLowerCase().replace(/ /g, '-') } })),
		fallback: false,
	};
}

export default TestingEquipmentPage;
