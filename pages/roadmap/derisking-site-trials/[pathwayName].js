import React from 'react';

// DATA CONTENT
import PATHWAY from 'data/Roadmap-DeriskingSiteTrials.json';

// SECTIONS
import RoadmapPathwayPage from 'pages-sections/roadmap/RoadmapContent-Sections/RoadmapPathwayPage.js';

const getPathwayObject = (pathwayName) => {
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const objectIndex = PATHWAY.findIndex(({ title }) => pathwayName === title.toLowerCase().replace(/ /g, '-'));
	const object = PATHWAY[objectIndex];
	object.index = objectIndex; // ATTACHES THE INDEX TO THE OBJECT
	object.previousLink = objectIndex - 1 >= 0 ? PATHWAY[objectIndex - 1].title.toLowerCase().replace(/ /g, '-') : null;
	object.nextLink = objectIndex + 1 < PATHWAY.length ? PATHWAY[objectIndex + 1].title.toLowerCase().replace(/ /g, '-') : null;
	return object;
};

const RoadmapPathwayPageRoute = ({ pathwayObject }) => {
	return <RoadmapPathwayPage {...pathwayObject} pathway={PATHWAY}></RoadmapPathwayPage>;
};

export async function getStaticProps(context) {
	const { pathwayName } = context.params;
	const pathwayObject = getPathwayObject(pathwayName);
	return {
		props: {
			pathwayObject,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: PATHWAY.map(({ title }) => ({ params: { pathwayName: title.toLowerCase().replace(/ /g, '-') } })),
		fallback: false,
	};
}

export default RoadmapPathwayPageRoute;
