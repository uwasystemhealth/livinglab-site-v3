import React from 'react';
import Link from 'next/link';
import { stringToLink } from 'helpers/validation';

// material-ui components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Card from 'components/MaterialKit/Card/Card.js';

// STYLES
import imagesStyles from 'assets/jss/nextjs-material-kit/imagesStyles.js';
import { cardTitle } from 'assets/jss/nextjs-material-kit.js';
const styles = {
	...imagesStyles,
	cardTitle: {
		...cardTitle,
		color: '#FFFFFF',
	},
	imgCardOverlay: {
		...imagesStyles.imgCardOverlay,
		'&,&:hover,&:focus': {
			color: '#FFFFFF',
		},
		backgroundColor: 'rgba(0, 0, 0, .5)',
	},
};
const useStyles = makeStyles(styles);

const CSCard = ({ title = 'Card title', description = '', img = '/img/feature-bg.jpg', workInProgress = null }) => {
	const classes = useStyles();
	const caseStudyName = stringToLink(title);
	return (
		<Card>
			<img className={classes.imgCard} src={img} alt='Card-img' />
			<div className={classes.imgCardOverlay}>
				<h4 className={classes.cardTitle}>{title}</h4>
				<p>{description}</p>

				<strong>
					{!workInProgress ? (
						<Link href={`/case-studies/?caseStudyName=${caseStudyName}`} as={`/case-studies/${caseStudyName}`} scroll={false}>
							<a className={classes.cardLink}>More</a>
						</Link>
					) : (
						<div className={classes.cardLink}>Work In Progress</div>
					)}
				</strong>
			</div>
		</Card>
	);
};

export default CSCard;
