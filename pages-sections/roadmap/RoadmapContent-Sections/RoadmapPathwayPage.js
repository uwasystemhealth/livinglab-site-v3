// NEXT + REACT
import React, { Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

//ICONS
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// CORE COMPONENTS
import Card from 'components/MaterialKit/Card/Card.js';
import CardBody from 'components/MaterialKit/Card/CardBody.js';
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

//STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
const useStyles = makeStyles(styles);

//SECTIONS
import Content from 'pages-sections/roadmap/RoadmapContent-Sections/Content.js';

//OWN COMPONENT
import StepperPathway, { StepIcon } from 'components/roadmaps/StepperPathway.js';

const RoadmapPathwayPage = ({
	title,
	description,
	requirements,
	index,
	previousLink,
	nextLink,
	pathway,
	pathwayName,
	background = require('assets/img/landing-bg.jpg'),
}) => {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Fragment>
			<Parallax small filter responsive image={background}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<h1 className={classes.title}>{title}</h1>
						</GridItem>
						<GridItem>
							<StepperPathway pathway={pathway} roadmapTitle={pathwayName} whiteFont></StepperPathway>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<Card>
						<CardBody>
							<GridContainer id='descriptionBox' justify='center' alignItems='center'>
								<StepIcon icon={index + 1} roadmapTitle={pathwayName}></StepIcon>
								<GridItem>
									<h5 className={classes.description} dangerouslySetInnerHTML={{ __html: description }}></h5>
								</GridItem>
							</GridContainer>
							<GridContainer id='card-actions' direction='row' justify='space-between' alignItems='center'>
								<GridItem xs={4} md={4} style={{ textAlign: 'center' }}>
									{previousLink && (
										<Button color='primary' simple href={previousLink}>
											<NavigateBeforeIcon></NavigateBeforeIcon>
											{isMobile ? '' : 'Previous'}
										</Button>
									)}
								</GridItem>

								<GridItem xs={4} md={4} style={{ textAlign: 'center' }}>
									{nextLink && (
										<Button color='primary' simple href={nextLink}>
											{isMobile ? '' : 'Next'} <NavigateNextIcon></NavigateNextIcon>
										</Button>
									)}
								</GridItem>
							</GridContainer>
						</CardBody>
					</Card>
					<Content requirements={requirements}></Content>
				</div>
			</div>
		</Fragment>
	);
};

export default RoadmapPathwayPage;
