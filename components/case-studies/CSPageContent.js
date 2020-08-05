// NEXT + REACT
import React, { Fragment } from 'react';

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
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

import landingStyles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
import productStyles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
import modalStyle from 'assets/jss/nextjs-material-kit/modalStyle.js';

const useStylesLanding = makeStyles(landingStyles);
const useStylesProduct = makeStyles(productStyles);
const useStylesModal = makeStyles(modalStyle);

const About = (props) => {
	const { title, backgroundImage = 'img/feature-bg.jpg', description, videoLink, closeModal } = props;
	const landingClasses = useStylesLanding();
	const productClasses = useStylesProduct();
	const modalClasses = useStylesModal();
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
					{/* <h2 className={classes.title}>Work In Progress</h2> */}
					<GridContainer className={productClasses.descriptionContainer}>
						<GridItem xs={12} md={6} className={productClasses.gridItemPadded}>
							<div className={productClasses.descriptionContainer}>
								<h5 className={productClasses.description} dangerouslySetInnerHTML={{ __html: description }}></h5>
							</div>
						</GridItem>
						<GridItem xs={12} md={6} className={productClasses.gridItemPadded}>
							<iframe className={productClasses.video} src={videoLink} allowFullScreen='allowFullScreen'></iframe>
						</GridItem>
					</GridContainer>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
