import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// @material -ui/icon components
import Timer from '@material-ui/icons/Timer';
import Assessment from '@material-ui/icons/Assessment';

//ICONS
import PartnerIcon from '@material-ui/icons/SupervisorAccount';
import SafetyIcon from '@material-ui/icons/LocalHospital';
import DraftsIcon from '@material-ui/icons/Drafts';

// core components
import Card from 'components/MaterialKit/Card/Card.js';
import CardBody from 'components/MaterialKit/Card/CardBody.js';
import CardHeader from 'components/MaterialKit/Card/CardHeader.js';
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

// STYLES
import stepperStyle from 'assets/jss/custom/stepper.js';
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

//OWN COMPONENT
import StepperPathway from 'components/roadmaps/StepperPathway.js';

// DATA SECTIONS
import DST_PATHWAY from 'data/Roadmap-DeriskingSiteTrials.json';
import ALT_PATHWAY from 'data/Roadmap-AcceleratedLifeTesting.json';

const useStyles = makeStyles(styles);
const useStepperStyles = makeStyles(stepperStyle);

const ALTDescription = () => {
	const classes = useStyles();
	const stepperClasses = useStepperStyles();

	return (
		<GridContainer>
			{[
				{
					Icon: Timer,
					title: 'Accelerated Life Testing',
					description:
						'The METS Ignited Mining Innovation Part 1: Imperatives and Barriers published in March 2017 identified one of the sector’s keychallenges as “innovators find it difficult to access sites to prove up results and Miners are averse to trialling/introducinginnovation without proven results”. In response to this METS Ignited has funded this Living Lab project. We have developed apre-test facility and supporting processes that:<ol>	<li>is easy to access for the innovator, notably small-to-medium-sized enterprise (SME);</li>	<li>supports completion of industry-equivalent HSE and risk assessments; and </li>	<li>provides a realistic pre-mine site testing environment. </li></ol>',
					pathway: ALT_PATHWAY,
				},
				{
					Icon: Assessment,
					title: 'Derisking Site Trials',
					description:
						'Accelerated aging and testing is used to simulate product failure in a short period of time, ideally before the products are inthe marketplace. Traditionally, it uses unusually high levels of environmental conditions to speed up the aging processes usinga standard test methodology.',
					pathway: DST_PATHWAY,
				},
			].map(({ title, Icon, pathway, description }) => (
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color='success'>
							<GridContainer direction='row' justify='center' alignItems='center'>
								<Icon />
								<h3>{title}</h3>
							</GridContainer>
						</CardHeader>
						<CardBody>
							<h5 className={classes.description} dangerouslySetInnerHTML={{ __html: description }}></h5>
							<br />
						</CardBody>
						<StepperPathway pathway={pathway} roadmapTitle={title}></StepperPathway>
						<CardBody>
							<GridContainer justify='center'>
								<Button round color='primary' href={`/roadmap/${title.toLowerCase().replace(/ /g, '-')}`}>
									More About {title}
								</Button>
							</GridContainer>
						</CardBody>
					</Card>
				</GridItem>
			))}
		</GridContainer>
	);
};

export default ALTDescription;
