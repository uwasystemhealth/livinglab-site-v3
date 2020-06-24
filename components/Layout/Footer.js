import React, { Fragment } from 'react';
import Link from 'next/link';

// nodejs library that concatenates classes
import classNames from 'classnames';

// material-ui core components
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';

import styles from 'assets/jss/nextjs-material-kit/components/footerStyle.js';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// OWN COMPONENTS
import CallToAction from './CallToAction';

const useStyles = makeStyles(styles);

const Footer = (props) => {
	const classes = useStyles();
	const whiteFont = true;
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
					<GridContainer>
						<GridItem md={12} sm={12}>
							<div className={classes.left}>
								<img id='logo' src='/img/logos/Living-Lab-Logo-WEB-white-without@UWA.png' alt='logo' className={classes.img} />
							</div>
						</GridItem>
						<GridItem md={3} sm={12}>
							<Divider></Divider>
							<List>
								<ListItem>
									<p>
										Aliquip irure duis aute ipsum. Mollit reprehenderit amet est culpa labore aute sit ipsum ullamco enim do. Qui non do
										nisi occaecat incididunt tempor proident dolore non laborum aliqua proident do ut.
									</p>
								</ListItem>
							</List>
						</GridItem>
						<GridItem md={3} sm={12}>
							<List>
								<ListItem>
									<strong>
										<Link href='/'>
											<a className={aClasses}>Home</a>
										</Link>
									</strong>
								</ListItem>

								<ListItem>
									<Link href='/about'>
										<a className={aClasses}>About Us</a>
									</Link>
								</ListItem>
								<ListItem>
									<Link href='/about#WhatIsTheLab'>
										<a className={aClasses}>What is the Lab</a>
									</Link>
								</ListItem>
								<ListItem>
									<Link href='/about#MeetTheTeam'>
										<a className={aClasses}>Meet The Team</a>
									</Link>
								</ListItem>
							</List>
							<Divider></Divider>
							<List>
								<ListItem>
									<Link href='/privacy-policy'>
										<a className={aClasses}>Privacy Policy</a>
									</Link>
								</ListItem>
								<ListItem></ListItem>
							</List>
						</GridItem>
						<GridItem md={3} sm={12}>
							<List>
								<ListItem>
									<strong>
										<Link href='/accelerated-life-testing'>
											<a className={aClasses}>Accelerated Life Testing</a>
										</Link>
									</strong>
								</ListItem>
								<ListItem>
									<Link href='/accelerated-life-testing/accelerated-bearing-failure-testing'>
										<a className={aClasses}>Accelerated Bearing Failure Testing</a>
									</Link>
								</ListItem>
								<ListItem>
									<Link href='/accelerated-life-testing/ultraviolet-radiation-testing'>
										<a className={aClasses}>Ultraviolet Radiation Testing</a>
									</Link>
								</ListItem>
								<ListItem>
									<Link href='/accelerated-life-testing/vibration'>
										<a className={aClasses}>Vibration</a>
									</Link>
								</ListItem>
								<ListItem>
									<Link href='/accelerated-life-testing/ip-testing'>
										<a className={aClasses}>IP Testing</a>
									</Link>
								</ListItem>
								<ListItem>
									<Link href='/accelerated-life-testing/emf-testing'>
										<a className={aClasses}>EMF Testing</a>
									</Link>
								</ListItem>
							</List>
						</GridItem>
						<GridItem md={3} sm={12}>
							<List>
								<ListItem>
									<strong>
										<Link href='/roadmap'>
											<a className={aClasses}>Roadmap</a>
										</Link>
									</strong>
								</ListItem>
								<ListItem>
									<Link href='/roadmap/accelerated-life-testing'>
										<a className={aClasses}>Accelerated Life Testing</a>
									</Link>
								</ListItem>
								<ListItem>
									<Link href='/roadmap/derisking-site-trials'>
										<a className={aClasses}>Derisking Site Trials</a>
									</Link>
								</ListItem>
							</List>
						</GridItem>
					</GridContainer>
					<br />
					<div className={classes.left}>
						&copy; {1900 + new Date().getYear()} , made by the Living Lab with design by{' '}
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
