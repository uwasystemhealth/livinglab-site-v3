import React, { createContext, useState } from 'react';
const AppContext = createContext({});

// Component System of Provider
export const AppProvider = (props) => {
	const [isContactFormModalOpen, setIsContactFormModalOpen] = useState(false);
	const [contactFormState, setContactFormState] = useState({});

	const handleContactFormChange = (event) => {
		const { name, value } = event.target;
		const newState = { ...contactFormState, [name]: value };
setContactFormState(newState)
console.log(newState)
	};

	const openContactFormModal = () => setIsContactFormModalOpen(true);
	const closeContactFormModal = () => setIsContactFormModalOpen(false);

	const contextValue = {
		isContactFormModalOpen,
		openContactFormModal,
		closeContactFormModal,
		handleContactFormChange
	};
	return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
};
export const AppConsumer = AppContext.Consumer;
export default AppContext;
