import React from 'react';
import Router, { useRouter } from 'next/router';


// OWN COMPONENT
import TestingPageContent from 'components/accelerated-life-testing/TestingPageContent.js';

// CONTENT
import TestingData from 'data/AcceleratedLifeTestingContent.json';

const getTestObject = (router) => {
	const { testingName } = router.query;
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const object = TestingData.find(({ title }) => testingName === title.toLowerCase().replace(/ /g, '-'));
	if (object) {
		return object;
	} else {
		Router.push('/');
	}
};

const TestingEquipmentPage = () => {
	const router = useRouter();
	const testObject = getTestObject(router);
	return <TestingPageContent {...testObject}></TestingPageContent>;
};

export default TestingEquipmentPage;
