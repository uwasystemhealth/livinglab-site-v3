import React, { createContext, useState } from 'react';
import axios from 'axios';

const AppContext = createContext({});

// Component System of Provider
export const AppProvider = (props) => {
	const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);
	const [contactFormState, setContactFormState] = useState({
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
		console.log(newState);
	};

	const handleFormSubmit = async (e, roadmap = '') => {
		e.preventDefault();
		console.log(contactFormState);
		try {
			await axios({
				method: 'POST',
				url: '/api/mail',
				data: contactFormState,
			});

			if (roadmap) {
				// GETTING A DOWLOADABLE
				await axios({
					method: 'POST',
					url: '/api/mail',
					data: { ...contactFormState, downloadables: roadmap },
				});
			}

			console.log('Success');
		} catch (err) {
			console.log(err);
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
	};
	return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
};
export const AppConsumer = AppContext.Consumer;
export default AppContext;
