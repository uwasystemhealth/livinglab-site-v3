// NEXT + REACT
import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

// @material-ui/icons
import Close from '@material-ui/icons/Close';

// CORE COMPONENTS
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

import landingStyles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
import productStyles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import modalStyle from 'assets/jss/nextjs-material-kit/modalStyle.js';

const useStylesLanding = makeStyles(landingStyles);
const useStylesProduct = makeStyles(productStyles);
const useStylesModal = makeStyles(modalStyle);

const About = (props) => {
	const {
		title,
		backgroundImage,
		whatIsIt = '',
		whatEquipmentsAreInvolved = '',
		whatEquipmentsAreInvolvedImage,
		methodology = '',
		methodologyImage,
		limitations = '',
		limitationsImage,
		closeModal,
	} = props;
	const landingClasses = useStylesLanding();
	const productClasses = useStylesProduct();
	const modalClasses = useStylesModal();
	const gridMatrixItems = [
		{ title: 'Equipment Involved', description: whatEquipmentsAreInvolved, image: whatEquipmentsAreInvolvedImage },
		{ title: 'Methodology', description: methodology, image: methodologyImage },
		{ title: 'Limitations', description: limitations, image: limitationsImage },
	];
	return (
		<Fragment>
			<Parallax small responsive filter image={backgroundImage} style={closeModal ? { transform: 'translate3d(0,0px,0)' } : null}>
				<div className={landingClasses.container}>
					{closeModal && (
						<IconButton className={modalClasses.modalCloseButton} key='close' aria-label='Close' color='inherit' onClick={closeModal}>
							<Close className={modalClasses.modalClose} />
						</IconButton>
					)}
					<h1 className={landingClasses.title}>{title}</h1>
				</div>
			</Parallax>
			<div className={classNames(landingClasses.main, landingClasses.mainRaised)}>
				<div className={productClasses.section}>
					<div className={landingClasses.container}>
						<h2 className={productClasses.title}>What is It?</h2>
						<h5 className={productClasses.description}>{whatIsIt}</h5>
						<br />
					</div>
					{gridMatrixItems.map(({ title, description, image }, index) => (
						<GridContainer
							key={title}
							spacing={0}
							direction={index % 2 ? 'row-reverse' : 'row'}
							justify='center'
							alignItems='center'
							className={productClasses.descriptionContainer}
						>
							<GridItem className={productClasses.gridItemPadded} md={6}>
								<div className={productClasses.descriptionContainer}>
									<h2 className={productClasses.title}>{title}</h2>
									<h5
										className={productClasses.description}
										dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/><br/>') }}
									></h5>
								</div>
							</GridItem>
							<GridItem className={productClasses.gridItemPadded} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
								{/* REFACTOR THE CSS STYLING */}
								<img src={image} alt='' className={productClasses.imgALT} />
							</GridItem>
						</GridContainer>
					))}
				</div>
			</div>
		</Fragment>
	);
};

export default About;
