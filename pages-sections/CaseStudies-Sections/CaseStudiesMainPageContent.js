import React, { Fragment } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

//SECTIONS
import CaseStudiesList from 'pages-sections/CaseStudies-Sections/CaseStudiesList.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const CaseStudiesMainPageContent = () => {
	return (
		<Fragment>
			{/* <div className={classes.section}>
				<h2 className={classes.title}>Case Studies</h2>
				<h5 className={classes.description}>
					Some TextSome Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text Some Text
				</h5>
			</div> */}
			<CaseStudiesList></CaseStudiesList>
		</Fragment>
	);
};

export default CaseStudiesMainPageContent;
