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

// @material-ui/icons
import { makeStyles } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import People from '@material-ui/icons/People';

// core components
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import CustomInput from 'components/MaterialKit/CustomInput/CustomInput.js';

// OWN COMPONENTS
import Context from 'components/Context/index';

import modalStyle from 'assets/jss/nextjs-material-kit/modalStyle.js';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />;
});

const useStyles = makeStyles(modalStyle);
const Contact = () => {
	const { isContactFormModalOpen, closeContactFormModal, handleContactFormChange: handleChange } = useContext(Context);
	const classes = useStyles();

	return (
		<Dialog
			classes={{
				root: classes.center,
				paper: classes.modal,
			}}
			open={isContactFormModalOpen}
			TransitionComponent={Transition}
			keepMounted
			onClose={closeContactFormModal}
			aria-labelledby='modal-slide-title'
			aria-describedby='modal-slide-description'
		>
			<DialogTitle id='classic-modal-slide-title' disableTypography className={classes.modalHeader}>
				<IconButton className={classes.modalCloseButton} key='close' aria-label='Close' color='inherit' onClick={closeContactFormModal}>
					<Close className={classes.modalClose} />
				</IconButton>
				<h4 className={classes.modalTitle}>Contact Us</h4>
			</DialogTitle>
			<DialogContent id='modal-slide-description' className={classes.modalBody}>
				<form id='contactform' method='post' action='https://formspree.io/systemhealthlab@gmail.com'>
					<CustomInput
						labelText='Business Name'
						id='Business Name'
						formControlProps={{
							fullWidth: true,
						}}
						inputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<People />
								</InputAdornment>
							),
							onChange: handleChange,
						}}
					/>
					<CustomInput
						labelText='Business Website'
						id='Business Website'
						formControlProps={{
							fullWidth: true,
						}}
						inputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<People />
								</InputAdornment>
							),
							onChange: handleChange,
						}}
					/>
					<CustomInput
						labelText='Business Mailing Address'
						id='Business Mailing Address'
						formControlProps={{
							fullWidth: true,
						}}
						inputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<People />
								</InputAdornment>
							),
							onChange: handleChange,
						}}
					/>
					<CustomInput
						labelText='Contact Name'
						id='Contact Name'
						formControlProps={{
							fullWidth: true,
						}}
						inputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<People />
								</InputAdornment>
							),
							onChange: handleChange,
						}}
					/>
					<CustomInput
						labelText='Contact Phone'
						id='Contact Phone'
						formControlProps={{
							fullWidth: true,
						}}
						inputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<People />
								</InputAdornment>
							),
							onChange: handleChange,
						}}
					/>
					<CustomInput
						labelText='Contact Email'
						id='Contact Email'
						formControlProps={{
							fullWidth: true,
						}}
						inputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									<People />
								</InputAdornment>
							),
							onChange: handleChange,
						}}
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => {
						console.log('SUBMIT');
					}}
					color='success'
				>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Contact;
