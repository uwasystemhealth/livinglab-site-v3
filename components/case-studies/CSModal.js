import React from 'react';
// material-ui components
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';

// FORM Material UI
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

// @material-ui/icons
import { makeStyles } from '@material-ui/core';

// OWN COMPONENTS
import CSPageContent from 'components/case-studies/CSPageContent.js';

// STYLES
import modalStyle from 'assets/jss/nextjs-material-kit/modalStyle.js';
const useStyles = makeStyles(modalStyle);


const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />;
});

const CSModal = (props) => {
	const { isModalOpen, closeModal, ...rest } = props;
	const theme = useTheme();
	const fullScreenMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const classes = useStyles();

	return (
		<Dialog
			classes={{
				root: classes.center,
				paper: classes.modal,
			}}
			open={isModalOpen}
			TransitionComponent={Transition}
			keepMounted
			disableBackdropClick
			fullWidth
			fullScreen={fullScreenMobile}
			onClose={closeModal}
			aria-labelledby='modal-slide-title'
			aria-describedby='modal-slide-description'
			maxWidth='lg'
			scroll='body'
		>
			<CSPageContent {...rest} closeModal={closeModal}></CSPageContent>
		</Dialog>
	);
};

export default CSModal;
