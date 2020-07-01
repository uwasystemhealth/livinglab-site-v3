import { withStyles } from '@material-ui/core/styles';
import StepConnector from '@material-ui/core/StepConnector';

const stepperStyle = {
	stepper: {
		backgroundColor: 'transparent',
	},
	root: {
		backgroundColor: '#FEBF00',
		zIndex: 1,
		color: '#FFFFFF',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	alternativeLabel: {
		color: '#FFFFFF',
	},
};

export const StepperConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		'& $line': {
			backgroundImage: 'linear-gradient( 95deg,#F26923 0%,#01B5AF 50%,#83C562 100%)',
		},
	},
	completed: {
		'& $line': {
			backgroundImage: 'linear-gradient( 95deg,#F26923 0%,#01B5AF 50%,#83C562 100%)',
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

export default stepperStyle;
