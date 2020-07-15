import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage';

// DATA
import TEAM from 'data/Team.json';

// IMAGE MAPPING
const images = TEAM.map(({ firstName, lastName, picture = `/img/team/${firstName.toLowerCase()}-${lastName.toLowerCase()}.jpg` }) => {
	return {
		src: picture,
	};
});

// SETTINGS
const MainSetting = {
	width: '100%',
	height: ['100px', '100px', '100px', '100px'],
	layout: [4, 4, 5, 5],
	photos: images,
	showNumOfRemainingPhotos: false,
};

const MainPageCollage = () => {
	return <ReactPhotoCollage {...MainSetting} />;
};

export default MainPageCollage;
