import React, { useContext } from 'react';
// material-ui components
import withStyles from '@material-ui/core/styles/withStyles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';

// FORM Material UI
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Divider from '@material-ui/core/Divider';

// @material-ui/icons
import { makeStyles } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import People from '@material-ui/icons/People';

// core components
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import CustomInput from 'components/MaterialKit/CustomInput/CustomInput.js';
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// OWN COMPONENTS
import TestingPageContent from 'components/accelerated-life-testing/TestingPageContent.js';

import modalStyle from 'assets/jss/nextjs-material-kit/modalStyle.js';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />;
});

const useStyles = makeStyles(modalStyle);

const TestingModal = (props) => {
	const { isModalOpen, closeModal, ...rest } = props;
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
			onClose={closeModal}
			aria-labelledby='modal-slide-title'
			aria-describedby='modal-slide-description'
			maxWidth='md'
		>
			<DialogTitle id='classic-modal-slide-title' disableTypography className={classes.modalHeader}>
				<IconButton className={classes.modalCloseButton} key='close' aria-label='Close' color='inherit' onClick={closeModal}>
					<Close className={classes.modalClose} />
				</IconButton>
				<h4 className={classes.modalTitle}>Contact Us</h4>
			</DialogTitle>
			<DialogContent id='modal-slide-description' className={classes.modalBody}>
				<TestingPageContent {...rest}></TestingPageContent>
			</DialogContent>
		</Dialog>
	);
};

export default TestingModal;
