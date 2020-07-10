import React, { createContext, useState } from 'react';
import axios from 'axios';
import { validateEmail, validatePhone, validateWebsite, notEmpty } from 'helpers/validation';

const AppContext = createContext({});

// Component System of Provider
export const AppProvider = (props) => {
	const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);
	const [notificationState, setNotificationState] = useState({
		open: false,
		text: '',
		severity: 'success',
	});
	const [contactFormState, setContactFormState] = useState({
		'Business Mailing Address': '',
		'Business Name': '',
		'Business Website': '',
		'Contact Email': '',
		'Contact Name': '',
		'Contact Phone': '',
	});
	const [contactFormErrorState, setContactFormErrorState] = useState({
		'Business Mailing Address': '',
		'Business Name': '',
		'Business Website': '',
		'Contact Email': '',
		'Contact Name': '',
		'Contact Phone': '',
	});

	const handleContactFormChange = (event) => {
		const { name, value } = event.target;
		const newState = { ...contactFormState, [name]: value };
		setContactFormState(newState);

		const validateModifyState = (value, validator, error) => {
			if (!validator(value) && (!!value || validator == notEmpty)) {
				setContactFormErrorState({ ...contactFormErrorState, [name]: error });
			} else {
				setContactFormErrorState({ ...contactFormErrorState, [name]: '' });
			}
		};

		switch (name) {
			case 'Contact Email':
				validateModifyState(value, notEmpty, 'Required Field');
				validateModifyState(value, validateEmail, 'Invalid Email');
				break;
			case 'Contact Phone':
				validateModifyState(value, notEmpty, 'Required Field');
				validateModifyState(value, validatePhone, 'Invalid Phone Number');
				break;
			case 'Business Website':
				validateModifyState(value, validateWebsite, 'Invalid Website');
				break;
			default:
				validateModifyState(value, notEmpty, 'Required Field');
		}

	};

	const closeNotification = () =>
		setNotificationState({
			open: false,
			text: '',
			severity: 'success',
		});

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			setNotificationState({
				open: true,
				text: 'Submitting... Wait For A Second',
				severity: 'info',
			});

			await axios({
				method: 'POST',
				url: '/api/mail',
				data: contactFormState,
			});

			// RESET STATE
			setContactFormState({
				'Business Mailing Address': '',
				'Business Name': '',
				'Business Website': '',
				'Contact Email': '',
				'Contact Name': '',
				'Contact Phone': '',
			});

			//C	LOSE IT FIRST- THEN OPEN
			setNotificationState({
				open: false,
			});

			setNotificationState({
				open: true,
				text: 'Successfully sent',
				severity: 'success',
			});

			setIsContactFormModalOpen(false);
		} catch (err) {
			setNotificationState({
				open: true,
				text: `Error Encountered: ${err}`,
				severity: 'error',
			});
		}
	};

	const openContactFormModal = () => setIsContactFormModalOpen(true);
	const closeContactFormModal = () => setIsContactFormModalOpen(false);

	const contextValue = {
		isContactFormModalOpen,
		openContactFormModal,
		handleFormSubmit,
		closeContactFormModal,
		handleContactFormChange,
		contactFormState,
		contactFormErrorState,
		notificationState,
		closeNotification,
	};
	return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
};
export const AppConsumer = AppContext.Consumer;
export default AppContext;
