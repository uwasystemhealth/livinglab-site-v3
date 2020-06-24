import React from 'react';
// material-ui components
import { makeStyles } from '@material-ui/core/styles';
// core components
import Card from 'components/MaterialKit/Card/Card.js';

import imagesStyles from 'assets/jss/nextjs-material-kit/imagesStyles.js';

import { cardTitle, cardSubtitle } from 'assets/jss/nextjs-material-kit.js';

const styles = {
	...imagesStyles,
	cardTitle,
	cardSubtitle,
};

const useStyles = makeStyles(styles);

const TestingCard = ({ title = 'Card title', description = 'Insert Description here', img = 'img/feature-bg.jpg' }) => {
	const classes = useStyles();
	return (
		<Card>
			<img className={classes.imgCard} src={img} alt='Card-img' />
			<div className={classes.imgCardOverlay}>
				<h4 className={classes.cardTitle}>{title}</h4>
				<p>{description}</p>

				<strong>
					<a href='' className={classes.cardLink} onClick={(e) => e.preventDefault()}>
						More
					</a>
				</strong>
			</div>
		</Card>
	);
};

export default TestingCard;
