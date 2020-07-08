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
import Context from 'components/Context/index';

import modalStyle from 'assets/jss/nextjs-material-kit/modalStyle.js';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='down' ref={ref} {...props} />;
});

const useStyles = makeStyles(modalStyle);

const ContactFormField = ({ fieldName, handleChange, icon }) => (
	<CustomInput
		labelText={fieldName}
		id={fieldName}
		formControlProps={{
			fullWidth: true,
		}}
		inputProps={{
			endAdornment: <InputAdornment position='end'>{icon}</InputAdornment>,
			onChange: handleChange,
		}}
	/>
);

const Contact = () => {
	const { isContactFormModalOpen, closeContactFormModal, handleContactFormChange: handleChange, handleFormSubmit } = useContext(Context);
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
			disableBackdropClick
			fullWidth
			onClose={closeContactFormModal}
			aria-labelledby='modal-slide-title'
			aria-describedby='modal-slide-description'
			maxWidth='md'
		>
			<DialogTitle id='classic-modal-slide-title' disableTypography className={classes.modalHeader}>
				<IconButton className={classes.modalCloseButton} key='close' aria-label='Close' color='inherit' onClick={closeContactFormModal}>
					<Close className={classes.modalClose} />
				</IconButton>
				<h4 className={classes.modalTitle}>Contact Us</h4>
			</DialogTitle>
			<DialogContent id='modal-slide-description' className={classes.modalBody}>
				<form id='contactform' method='post' action='https://formspree.io/systemhealthlab@gmail.com'>
					<h4>Your Company Details</h4>
					<GridContainer>
						<GridItem md={6}>
							<ContactFormField fieldName='Business Name' handleChange={handleChange} icon={<People />}></ContactFormField>
						</GridItem>

						<GridItem md={6}>
							<ContactFormField fieldName='Business Website' handleChange={handleChange} icon={<People />}></ContactFormField>
						</GridItem>
						<GridItem md={12}>
							<ContactFormField fieldName='Business Mailing Address' handleChange={handleChange} icon={<People />}></ContactFormField>
						</GridItem>
					</GridContainer>
					<br></br>
					<h4>Your Business Details</h4>
					<GridContainer>
						<GridItem md={4}>
							<ContactFormField fieldName='Contact Name' handleChange={handleChange} icon={<People />}></ContactFormField>
						</GridItem>
						<GridItem md={4}>
							<ContactFormField fieldName='Contact Phone' handleChange={handleChange} icon={<People />}></ContactFormField>
						</GridItem>
						<GridItem md={4}>
							<ContactFormField fieldName='Contact Email' handleChange={handleChange} icon={<People />}></ContactFormField>
						</GridItem>
					</GridContainer>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleFormSubmit} color='success'>
					Submit
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Contact;
