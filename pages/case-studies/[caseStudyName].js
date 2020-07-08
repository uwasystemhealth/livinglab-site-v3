import React from 'react';
import Router, { useRouter } from 'next/router';

// OWN COMPONENT
import TestingPageContent from 'pages-sections/CaseStudies-Sections/CaseStudiesPage.js';

// CONTENT
import CaseStudies from 'data/CaseStudies.json';

const getCaseStudyObject = (caseStudyName) => {
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const object = CaseStudies.find(({ title }) => caseStudyName === title.toLowerCase().replace(/ /g, '-'));
	return object;
};

const caseStudyPage = ({ caseStudyObject }) => {
	return <TestingPageContent {...caseStudyObject}></TestingPageContent>;
};

export async function getStaticProps(context) {
	const { caseStudyName } = context.params;
	const caseStudyObject = getCaseStudyObject(caseStudyName);
	return {
		props: {
			caseStudyObject,
		},
	};
}

export async function getStaticPaths() {
	const caseStudies = CaseStudies.filter(({ workInProgress = null }) => !workInProgress);
	return {
		paths: caseStudies.map(({ title }) => ({ params: { caseStudyName: title.toLowerCase().replace(/ /g, '-') } })),
		fallback: false,
	};
}

export default caseStudyPage;
