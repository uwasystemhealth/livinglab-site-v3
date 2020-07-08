import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons components
import Book from '@material-ui/icons/Book';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

// DATA
import CaseStudies from 'data/CaseStudies.json';
const About = () => {
	const classes = useStyles();
	const { title, description, videoLink } = CaseStudies[0]; // SELECT TO DISPLAY WHAT CASE STUDY
	return (
		<div className={classes.section}>
			<h2 className={classes.title}>Our Work</h2>
			<GridContainer direction='row-reverse'>
				<GridItem>
					<h5 className={classes.description}>
						Some TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome TextSome Text Some Text Some TextSome TextSome
						TextSome TextSome TextSome Text
					</h5>
					<h5 className={classes.description}>
						Here is one of the work we have done, <strong>{title}</strong>.
					</h5>
					<h5 className={classes.description}>{description}</h5>
					<Button color='primary' href='/case-studies'>
						<Book></Book>
						More About <br />
						Case Studies
					</Button>{' '}
					<Button color='success' href={`/case-studies/${title.toLowerCase().replace(/ /g, '-')}`}>
						More About <br />
						{title}
					</Button>
				</GridItem>
				<GridItem>
					<br />
					<iframe className={classes.video} src={videoLink}></iframe>
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default About;
