import React from 'react';
import Router from 'next/router';
// @material-ui/core components
import { makeStyles, styled } from '@material-ui/core/styles';

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

const StepperPathway = ({ pathway, StepIcon, roadmapTitle, whiteFont }) => {
	const stepperClasses = useStepperStyles();
	const StepButton = whiteFont ? StyledStepButton : StepButton; // OVERWRITE BY WHITEFONT
	return (
		<Stepper alternativeLabel nonLinear className={stepperClasses.stepper}>
			{pathway.map(({ title }, index) => (
				<Step key={title} active={true} connector={<StepperConnector />}>
					<StepButton
						icon={StepIcon({ icon: index + 1 })}
						onClick={() => Router.push(`/roadmap/${stringToLink(roadmapTitle)}/${stringToLink(title)}`)}
					>
						{title}
					</StepButton>
				</Step>
			))}
		</Stepper>
	);
};

export default StepperPathway;
