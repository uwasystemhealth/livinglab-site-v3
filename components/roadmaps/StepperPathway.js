import React from 'react';
import Router from 'next/router';
// @material-ui/core components
import { makeStyles, styled } from '@material-ui/core/styles';

// ICONS
import PartnerIcon from '@material-ui/icons/SupervisorAccount';
import SafetyIcon from '@material-ui/icons/LocalHospital';
import DraftsIcon from '@material-ui/icons/Drafts';
import TimerIcon from '@material-ui/icons/Timer';
import RoomIcon from '@material-ui/icons/Room';

// CORE COMPONENTS
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import StepButton from '@material-ui/core/StepButton';

// STYLES
import stepperStyle from 'assets/jss/custom/stepper.js';
import { StepperConnector } from 'assets/jss/custom/stepper';
const useStepperStyles = makeStyles(stepperStyle);

const stringToLink = (string) => string.toLowerCase().replace(/ /g, '-');

// WORKAROUND CHANGE COLOR OF STEP LABEL
const StyledStepButton = styled(StepButton)({
	'& .MuiStepLabel-active': {
		color: '#FFFF',
	},
});

const StepperPathway = ({ pathway, roadmapTitle, whiteFont }) => {
	const StepIcon = (props) => {
		const icons =
			roadmapTitle == 'Accelerated Life Testing'
				? [<PartnerIcon></PartnerIcon>, <SafetyIcon></SafetyIcon>, <TimerIcon></TimerIcon>, <DraftsIcon></DraftsIcon>]
				: [<PartnerIcon></PartnerIcon>, <SafetyIcon></SafetyIcon>, <RoomIcon></RoomIcon>, <DraftsIcon></DraftsIcon>];
		return <div className={stepperClasses.root}>{icons[props.icon - 1]}</div>;
	};

	const stepperClasses = useStepperStyles();
	const StepButtonCustom = whiteFont ? StyledStepButton : StepButton; // OVERWRITE BY WHITEFONT
	return (
		<Stepper alternativeLabel nonLinear className={stepperClasses.stepper}>
			{pathway.map(({ title }, index) => (
				<Step key={title} active={true} connector={<StepperConnector />}>
					<StepButtonCustom
						icon={StepIcon({ icon: index + 1 })}
						onClick={() => Router.push(`/roadmap/${stringToLink(roadmapTitle)}/${stringToLink(title)}`)}
					>
						{title}
					</StepButtonCustom>
				</Step>
			))}
		</Stepper>
	);
};

export default StepperPathway;
