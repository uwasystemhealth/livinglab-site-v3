import React from 'react';
import { stringToLink } from 'helpers/validation';

// DATA CONTENT
import PATHWAY from 'data/Roadmap-DeriskingSiteTrials.json';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Card from 'components/MaterialKit/Card/Card.js';

// SECTIONS
import RoadmapPathwayPage from 'pages-sections/roadmap/RoadmapContent-Sections/RoadmapPathwayPage.js';

// STYLES
import imagesStyles from 'assets/jss/nextjs-material-kit/imagesStyles.js';
import { cardTitle } from 'assets/jss/nextjs-material-kit.js';
const styles = {
	...imagesStyles,
	cardTitle: {
		...cardTitle,
		color: '#FFFFFF',
	},
	imgCardOverlay: {
		...imagesStyles.imgCardOverlay,
		'&,&:hover,&:focus': {
			color: '#FFFFFF',
		},
		backgroundColor: 'rgba(0, 0, 0, .5)',
	},
};
const useStyles = makeStyles(styles);
import productStyles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useProductStyles = makeStyles(productStyles);

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
	const classes = useStyles();
	const productClasses = useProductStyles();
	const pictures = [
		{
			img: '/img/roadmap/derisking-site-trials/pump.jpg',
			title: 'Central Plant Centrifugal Pump',
			description: 'The UWA System Health Lab’s BlueBox was tested at UWA’s Central Plant to monitor the vibration of a centrifugal pump.',
		},
		{
			img: '/img/roadmap/derisking-site-trials/fan.jpg',
			title: 'Centrifugal Fan',
			description: 'A centrifugal fan was used for the comparison of MEMS-IoT with conventional piezoelectric vibration sensor.',
		},
	];
	const pathwayObject = getPathwayObject();
	return (
		<RoadmapPathwayPage {...pathwayObject} pathway={PATHWAY} pathwayName='Derisking Site Trials'>
			<div className={classes.section}>
				<h2 className={productClasses.title}>Examples of UWA Infrastructure</h2>
				<GridContainer>
					{pictures.map(({ title, description, img }) => (
						<GridItem sm={12} md={6} key={title}>
							<Card>
								<img className={classes.imgCard} src={img} alt='Card-img' />
								<div className={classes.imgCardOverlay}>
									<h4 className={classes.cardTitle}>{title}</h4>
									<p>{description}</p>
								</div>
							</Card>
						</GridItem>
					))}
				</GridContainer>
			</div>
			<h2 className={productClasses.title}>Site Trial Requirements</h2>
		</RoadmapPathwayPage>
	);
};

export default AcceleratedLifeTests;
