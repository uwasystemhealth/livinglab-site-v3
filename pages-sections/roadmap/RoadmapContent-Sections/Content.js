import React, { Fragment } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Card from 'components/MaterialKit/Card/Card.js';
import CardBody from 'components/MaterialKit/Card/CardBody.js';
import CardHeader from 'components/MaterialKit/Card/CardHeader.js';
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

const RoadmapContent = ({ requirements }) => {
	const classes = useStyles();
	return (
		<Fragment>
			<GridContainer className={classes.section}>
				{requirements.map(({ title, content }, index) => (
					<GridItem key={title} md={index == requirements.length - 1 && requirements.length % 2 ? 12 : 6}>
						{/* RULE FOR LAST ELEMENT TO EXPAND IF ODD NUMBER OF ITEMS */}
						<Card>
							<CardHeader color='danger'>
								<h4>{title}</h4>
							</CardHeader>
							<CardBody>
								<h5 className={classes.description} dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/><br/>') }}></h5>
							</CardBody>
						</Card>
					</GridItem>
				))}
			</GridContainer>
		</Fragment>
	);
};

export default RoadmapContent;
