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
import Description from 'pages-sections/roadmap/RoadmapMainPage-Sections/DSTDescription';

// DATA Import
import DERISKING_SITE_TRIALS_DATA from 'data/Roadmap-DeriskingSiteTrials.json';

import productStyles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
import stepperStyles from 'assets/jss/custom/stepper.js';

const useStyles = makeStyles(styles);
const useStepperStyles = makeStyles(stepperStyles);
const useStylesProduct = makeStyles(productStyles);

const AcceleratedLifeTesting = () => {
	const classes = useStyles();
	const productClasses = useStylesProduct();
	const stepperClasses = useStepperStyles();
	const stepIcon = (props) => {
		const icons = [<PartnerIcon></PartnerIcon>, <PartnerIcon></PartnerIcon>, <SafetyIcon></SafetyIcon>, <DraftsIcon></DraftsIcon>];
		return <div className={stepperClasses.root}>{icons[props.icon - 1]}</div>;
	};
	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/landing-bg.jpg')}>
				<div className={classes.container}>
					<h1 className={classes.title}>Derisking Site Trials</h1>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<Description></Description>
					<Stepper orientation='vertical'>
						{DERISKING_SITE_TRIALS_DATA.map(({ title, description }) => (
							<Step key={title} active={true}>
								<StepLabel StepIconComponent={stepIcon}>
									<h3 className={productClasses.title}>{title}</h3>
								</StepLabel>
								<StepContent>
									<h5 className={productClasses.description}>{description}</h5> <br />
									<GridContainer justify='center'>
										<GridItem xs={9} md={3}>
											<Button
												color='primary'
												href={`derisking-site-trials/${title.toLowerCase().replace(/ /g, '-')}`}
												style={{ width: '100%' }}
											>
												More About <br />
												{title}
											</Button>
										</GridItem>
									</GridContainer>
								</StepContent>
							</Step>
						))}
					</Stepper>
				</div>
			</div>
		</Fragment>
	);
};

export default AcceleratedLifeTesting;
