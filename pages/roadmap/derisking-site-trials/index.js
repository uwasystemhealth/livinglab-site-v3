// NEXT + REACT
import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepConnector from '@material-ui/core/StepConnector';

//ICONS
import PartnerIcon from '@material-ui/icons/SupervisorAccount';
import SafetyIcon from '@material-ui/icons/LocalHospital';
import DraftsIcon from '@material-ui/icons/Drafts';

// CORE COMPONENTS
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

// SECTIONS
import ALTDescription from 'pages-sections/accelerated-life-testing/AcceleratedLifeTesting-Sections/Description.js';
import Testings from 'pages-sections/accelerated-life-testing/AcceleratedLifeTesting-Sections/Testings.js';

// DATA Import
import DERISKING_SITE_TRIALS_DATA from 'data/Roadmap-DeriskingSiteTrials.json';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
const useStyles = makeStyles(styles);
const useStepperStyles = makeStyles({
	root: {
		backgroundColor: '#eaeaf0',
		zIndex: 1,
		color: '#fff',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
const ColorlibConnector = withStyles({
	active: {
		'& $lineVertical': {
			backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	completed: {
		'& $lineVertical': {
			backgroundImage: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	lineVertical: {
		height: 1,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

const AcceleratedLifeTesting = () => {
	const classes = useStyles();
	const stepperClasses = useStepperStyles();
	const stepIcon = (props) => {
		const icons = [<PartnerIcon></PartnerIcon>, <PartnerIcon></PartnerIcon>, <SafetyIcon></SafetyIcon>, <DraftsIcon></DraftsIcon>];
		return <div className={stepperClasses.root}>{icons[props.icon - 1]}</div>;
	};
	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/landing-bg.jpg')}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>Derisking Site Trials</h1>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<ALTDescription></ALTDescription>
					<Stepper orientation='vertical' connector={<ColorlibConnector />}>
						{DERISKING_SITE_TRIALS_DATA.map(({ title, description }) => (
							<Step key={title} active={true}>
								<StepLabel StepIconComponent={stepIcon}>{title}</StepLabel>
								<StepContent>{description}</StepContent>
							</Step>
						))}
					</Stepper>
				</div>
			</div>
		</Fragment>
	);
};

export default AcceleratedLifeTesting;
