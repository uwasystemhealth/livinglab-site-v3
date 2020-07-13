import React from 'react';
import { stringToLink } from 'helpers/validation';

// DATA CONTENT
import PATHWAY from 'data/Roadmap-AcceleratedLifeTesting.json';

// SECTIONS
import RoadmapPathwayPage from 'pages-sections/roadmap/RoadmapContent-Sections/RoadmapPathwayPage.js';
import Testings from 'pages-sections/accelerated-life-testing/AcceleratedLifeTesting-Sections/Testings.js';

const getPathwayObject = () => {
	// REPLACE TITLE SPACES WITH - THEN COMPARE
	const OBJECT_INDEX = 2;
	const object = PATHWAY[OBJECT_INDEX];
	object.index = OBJECT_INDEX; // ATTACHES THE INDEX TO THE OBJECT
	object.previousLink = OBJECT_INDEX - 1 >= 0 ? stringToLink(PATHWAY[OBJECT_INDEX - 1].title) : null;
	object.nextLink = OBJECT_INDEX + 1 < PATHWAY.length ? stringToLink(PATHWAY[OBJECT_INDEX + 1].title) : null;
	return object;
};

const AcceleratedLifeTests = () => {
	const pathwayObject = getPathwayObject();
	return (
		<RoadmapPathwayPage {...pathwayObject} pathway={PATHWAY} pathwayName='Accelerated Life Testing'>
			<Testings></Testings>
		</RoadmapPathwayPage>
	);
};

export default AcceleratedLifeTests;
