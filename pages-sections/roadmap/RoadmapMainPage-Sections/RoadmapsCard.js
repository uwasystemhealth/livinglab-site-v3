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
	const StepIcon = (props) => {
		const icons = [<PartnerIcon></PartnerIcon>, <PartnerIcon></PartnerIcon>, <SafetyIcon></SafetyIcon>, <DraftsIcon></DraftsIcon>];
		return <div className={stepperClasses.root}>{icons[props.icon - 1]}</div>;
	};

	return (
		<GridContainer>
			{[
				{ Icon: Timer, title: 'Accelerated Life Testing', pathway: ALT_PATHWAY },
				{ Icon: Assessment, title: 'Derisking Mine Site Testing', pathway: DST_PATHWAY },
			].map(({ title, Icon, pathway }) => (
				<GridItem xs={12} sm={12} md={6}>
					<Card>
						<CardHeader color='success'>
							<GridContainer direction='row' justify='center' alignItems='center'>
								<GridItem>
									<Icon />
								</GridItem>
								<GridItem>
									<h3>{title}</h3>
								</GridItem>
							</GridContainer>
						</CardHeader>
						<CardBody>
							<div>
								Some Descrtiption Some DescrtiptionSome DescrtiptionSome DescrtiptionSome DescrtiptionSome DescrtiptionSome DescrtiptionSome
								DescrtiptionSome DescrtiptionSome DescrtiptionSome Descrtiption
							</div>
							<br />
							<StepperPathway pathway={pathway} StepIcon={StepIcon} roadmapTitle={title}></StepperPathway>
						</CardBody>
					</Card>
				</GridItem>
			))}
		</GridContainer>
	);
};

export default ALTDescription;
