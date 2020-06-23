import React, { Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// material-ui core components
import { List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
import styles from 'assets/jss/nextjs-material-kit/components/footerStyle.js';

// OWN COMPONENTS
import CallToAction from './CallToAction';

const useStyles = makeStyles(styles);

const Footer = (props) => {
	const classes = useStyles();
	const { whiteFont } = props;
	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: whiteFont,
	});
	const aClasses = classNames({
		[classes.a]: true,
		[classes.footerWhiteFont]: whiteFont,
	});

	return (
		<Fragment>
			<CallToAction></CallToAction>
			<footer className={footerClasses}>
				<div className={classes.container}>
					<div className={classes.left}>
						<List className={classes.list}>
							<ListItem className={classes.inlineBlock}>
								<a href='https://www.creative-tim.com/?ref=njsmk-footer' className={classes.block} target='_blank'>
									Creative Tim
								</a>
							</ListItem>
							<ListItem className={classes.inlineBlock}>
								<a href='https://www.creative-tim.com/presentation?ref=njsmk-footer' className={classes.block} target='_blank'>
									About us
								</a>
							</ListItem>
							<ListItem className={classes.inlineBlock}>
								<a href='http://blog.creative-tim.com/?ref=njsmk-footer' className={classes.block} target='_blank'>
									Blog
								</a>
							</ListItem>
							<ListItem className={classes.inlineBlock}>
								<a href='https://www.creative-tim.com/license?ref=njsmk-footer' className={classes.block} target='_blank'>
									Licenses
								</a>
							</ListItem>
						</List>
					</div>
					<div className={classes.right}>
						&copy; {1900 + new Date().getYear()} , made by the Living Lab with theme and design by {" "}
						<a href='https://www.creative-tim.com?ref=njsmk-footer' className={aClasses} target='_blank'>
							Creative Tim
						</a>{' '}
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
