import React from 'react';
import { stringToLink } from 'helpers/validation';

// OWN COMPONENT
import CaseStudiesPageContent from 'components/case-studies/CSPageContent.js';

// CONTENT
import CaseStudies from 'data/CaseStudies.js';

const getCaseStudyObject = (caseStudyName) => {
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const object = CaseStudies.find(({ title }) => caseStudyName === stringToLink(title));
	return object;
};

const caseStudyPage = ({ caseStudyObject }) => {
	return <CaseStudiesPageContent {...caseStudyObject} />;
};

// FETCHES THE STATIC PROPERTIES BASED ON THE ROUTING CONTEXT
export async function getStaticProps(context) {
	const { caseStudyName } = context.params;
	const caseStudyObject = getCaseStudyObject(caseStudyName);
	return {
		props: {
			caseStudyObject,
		},
	};
}

// VALIDATES THE VALID PATHS FOR THE DYNAMIC ROUTE
export async function getStaticPaths() {
	const caseStudies = CaseStudies.filter(({ workInProgress = null }) => !workInProgress);
	return {
		paths: caseStudies.map(({ title }) => ({ params: { caseStudyName: stringToLink(title) } })),
		fallback: false,
	};
}

export default caseStudyPage;
