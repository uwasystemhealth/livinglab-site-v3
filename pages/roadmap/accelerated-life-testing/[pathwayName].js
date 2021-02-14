import React from 'react';
import { stringToLink } from 'helpers/validation';

// DATA CONTENT
import PATHWAY from 'data/Roadmap-AcceleratedLifeTesting.js';

// SECTIONS
import RoadmapPathwayPage from 'pages-sections/roadmap/RoadmapContent-Sections/RoadmapPathwayPage.js';

const getPathwayObject = (pathwayName) => {
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const objectIndex = PATHWAY.findIndex(({ title }) => pathwayName === stringToLink(title));
	const object = PATHWAY[objectIndex];
	object.index = objectIndex; // ATTACHES THE INDEX TO THE OBJECT
	object.previousLink = objectIndex - 1 >= 0 ? stringToLink(PATHWAY[objectIndex - 1].title) : null;
	object.nextLink = objectIndex + 1 < PATHWAY.length ? stringToLink(PATHWAY[objectIndex + 1].title) : null;
	return object;
};

const RoadmapPathwayPageRoute = ({ pathwayObject }) => {
	return <RoadmapPathwayPage {...pathwayObject} pathway={PATHWAY} pathwayName='Accelerated Life Testing'></RoadmapPathwayPage>;
};

// FETCHES THE STATIC PROPERTIES BASED ON THE ROUTING CONTEXT
export async function getStaticProps(context) {
	const { pathwayName } = context.params;
	const pathwayObject = getPathwayObject(pathwayName);
	return {
		props: {
			pathwayObject,
		},
	};
}

// VALIDATES THE VALID PATHS FOR THE DYNAMIC ROUTE
export async function getStaticPaths() {
	return {
		paths: PATHWAY.filter(({ custom = null }) => custom == null).map(({ title }) => ({ params: { pathwayName: stringToLink(title) } })),
		fallback: false,
	};
}

export default RoadmapPathwayPageRoute;
