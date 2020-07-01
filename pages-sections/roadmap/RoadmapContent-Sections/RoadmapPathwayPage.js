// NEXT + REACT
import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles, styled } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

//ICONS
import PartnerIcon from '@material-ui/icons/SupervisorAccount';
import SafetyIcon from '@material-ui/icons/LocalHospital';
import DraftsIcon from '@material-ui/icons/Drafts';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import DownloadIcon from '@material-ui/icons/GetApp';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

// CORE COMPONENTS
import Card from 'components/MaterialKit/Card/Card.js';
import CardBody from 'components/MaterialKit/Card/CardBody.js';
import CardHeader from 'components/MaterialKit/Card/CardHeader.js';
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

//STYLES
import stepperStyle from 'assets/jss/custom/stepper.js';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
import { StepperConnector } from '../../../assets/jss/custom/stepper';

const useStyles = makeStyles(styles);
const useStepperStyles = makeStyles(stepperStyle);

//SECTIONS
import Content from 'pages-sections/roadmap/RoadmapContent-Sections/Content.js';

// DATA Import
import DERISKING_SITE_TRIALS_DATA from 'data/Roadmap-DeriskingSiteTrials.json';

// WORKAROUND CHANGE COLOR OF STEP LABEL
const StyledStepLabel = styled(StepLabel)({
	'& .MuiStepLabel-active': {
		color: '#FFFF',
	},
});

const RoadmapPathwayPage = ({ title, description, requirements, index, previousLink, nextLink, pathway }) => {
	const classes = useStyles();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const stepperClasses = useStepperStyles();
	console.log(pathway);
	console.log(title);
	const StepIcon = (props) => {
		const icons = [<PartnerIcon></PartnerIcon>, <PartnerIcon></PartnerIcon>, <SafetyIcon></SafetyIcon>, <DraftsIcon></DraftsIcon>];
		return <div className={stepperClasses.root}>{icons[props.icon - 1]}</div>;
	};
	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/landing-bg.jpg')}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<h1 className={classes.title}>{title}</h1>
						</GridItem>
						<GridItem>
							<Stepper alternativeLabel nonLinear className={stepperClasses.stepper}>
								{pathway.map(({ title }) => (
									<Step key={title} active={true} connector={<StepperConnector />}>
										<StyledStepLabel StepIconComponent={StepIcon} className={stepperClasses.alternativeLabel}>
											{title}
										</StyledStepLabel>
									</Step>
								))}
							</Stepper>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<Card>
						<CardBody>
							<GridContainer id='descriptionBox' direction='row' justify='center' alignItems='center'>
								<StepIcon icon={index + 1}></StepIcon>
								<h5 className={classes.description}>{description}</h5>
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
									<Button color='success' simple>
										{isMobile ? '' : 'Download PDF'} <DownloadIcon></DownloadIcon>
									</Button>
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
