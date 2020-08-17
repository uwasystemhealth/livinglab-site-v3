// NEXT + REACT
import React, { Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// CORE COMPONENTS
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import Parallax from 'components/MaterialKit/Parallax/Parallax.js';

// SECTIONS
import Content from 'pages-sections/CaseStudies-Sections/CaseStudiesMainPageContent.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
const useStyles = makeStyles(styles);

const CaseStudies = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<Parallax small filter responsive image={require('assets/img/case-studies.jpg')}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={12}>
							<h1 className={classes.title}>Case Studies</h1>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<Content></Content>
				</div>
			</div>
		</Fragment>
	);
};

export default CaseStudies;
