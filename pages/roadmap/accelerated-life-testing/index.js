// NEXT + REACT
import React, { Fragment } from 'react';
import { stringToLink } from 'helpers/validation';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';

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
import Description from 'pages-sections/roadmap/RoadmapMainPage-Sections/ALTDescription';

// DATA Import
import ACCELERATED_LIFE_TESTING_DATA from 'data/Roadmap-AcceleratedLifeTesting.json';

// STYLES
import productStyles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
import stepperStyles from 'assets/jss/custom/stepper.js';
const useStyles = makeStyles(styles);
const useStepperStyles = makeStyles(stepperStyles);
const useStylesProduct = makeStyles(productStyles);

// OWN COMPONENTS
import { StepIconALT } from 'components/roadmaps/StepperPathway.js';

const AcceleratedLifeTesting = () => {
	const classes = useStyles();
	const productClasses = useStylesProduct();

	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/landing-bg.jpg')}>
				<div className={classes.container}>
					<h1 className={classes.title}>Accelerated Life Testing</h1>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<div className={productClasses.section}>
						<h2 className={productClasses.title}>Partner Roadmap</h2>
						<h5 className={productClasses.description}>
							<strong>
								Our Partner Roadmap for Accelerated Life Testing (ALT) is a comprehensive testing plan that assesses your product from
								design intent through to final test results reporting.
							</strong>
						</h5>
						<Stepper orientation='vertical'>
							{ACCELERATED_LIFE_TESTING_DATA.map(({ title, description }) => (
								<Step key={title} active={true}>
									<StepLabel StepIconComponent={StepIconALT}>
										<h3 className={productClasses.title}>{title}</h3>
									</StepLabel>
									<StepContent>
										<h5 className={productClasses.description} dangerouslySetInnerHTML={{ __html: description }}></h5> <br />
										<GridContainer justify='center'>
											<GridItem xs={9} md={3}>
												<Button color='primary' href={`accelerated-life-testing/${stringToLink(title)}`} style={{ width: '100%' }}>
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
			</div>
		</Fragment>
	);
};

export default AcceleratedLifeTesting;
