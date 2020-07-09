import React from 'react';
import { ReactPhotoCollage } from 'react-photo-collage';
import Gallery from 'react-grid-gallery';

// MATERIAL UI QUERY
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// DATA
import TEAM from 'data/Team.json';

const images = TEAM.map(({ firstName, lastName, picture = `/img/team/${firstName.toLowerCase()}-${lastName.toLowerCase()}.jpg` }) => {
	return { src: picture };
});
const MainSetting = {
	width: '100%',
	height: ['100px', '100px', '100px', '100px'],
	layout: [4, 4, 4, 5],
	photos: images,
	showNumOfRemainingPhotos: false,
};

const MainPageCollage = () => {
	return <ReactPhotoCollage {...MainSetting} />;
};

export default MainPageCollage;

const AboutSetting = (isMobile) => {
	if (isMobile) return MainSetting;
	return {
		width: '100%',
		height: ['125px', '125px'],
		layout: [8, 8],
		photos: images,
		showNumOfRemainingPhotos: false,
	};
};

export const AboutPageCollage = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	return <ReactPhotoCollage {...AboutSetting(isMobile)} />;
};
