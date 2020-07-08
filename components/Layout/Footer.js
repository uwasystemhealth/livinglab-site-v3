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

// CONTENT
import TestingData from 'data/AcceleratedLifeTestingContent.json';
import CaseStudies from 'data/CaseStudies.json';

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
										Bridging the valley of death between development and deployment for MEMS-IOT products through accelerated life testing
										and derisking site trials.
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
										<a className={aClasses}>Why Was The Living Lab Founded</a>
									</Link>
								</ListItem>
								<ListItem>
									<Link href='/about#MeetTheTeam'>
										<a className={aClasses}>Meet The Team</a>
									</Link>
								</ListItem>
							</List>
							<ListItem>
								<Divider></Divider>
							</ListItem>
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
									<strong>Roadmap</strong>
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
								<ListItem>
									<Divider></Divider>
								</ListItem>
								<ListItem>
									<strong>
										<Link href='/case-studies'>
											<a className={aClasses}>Case Studies</a>
										</Link>
									</strong>
								</ListItem>
								{CaseStudies.filter(({ workInProgress = null }) => !workInProgress).map(({ title }) => (
									<ListItem key={title}>
										<Link href={`/case-studies/${title.toLowerCase().replace(/ /g, '-')}`}>
											<a className={aClasses}>{title}</a>
										</Link>
									</ListItem>
								))}
							</List>
						</GridItem>
						<GridItem md={3} sm={12}>
							<List>
								<ListItem>
									<strong>
										<Link href='/accelerated-life-testing'>
											<a className={aClasses}>Accelerated Life Test Equipment</a>
										</Link>
									</strong>
								</ListItem>
								{/* DYNAMIC FOOTER CREATION */}
								{TestingData.filter(({ workInProgress = null }) => !workInProgress).map(({ title }) => (
									<ListItem key={title}>
										<Link href={`/accelerated-life-testing/${title.toLowerCase().replace(/ /g, '-')}`}>
											<a className={aClasses}>{title}</a>
										</Link>
									</ListItem>
								))}
							</List>
						</GridItem>
					</GridContainer>
					<br />
					<div className={classes.left}>
						&copy; {1900 + new Date().getYear()} , Made By{' '}
						<a href='https://frinzelapuz.now.sh/' target='_blank'>
							Frinze Erin Lapuz
						</a>{' '}
						on Behalf of The Living Lab and The{' '}
						<a href='https://systemhealthlab.com/' target='_blank'>
							System Health Lab
						</a>{' '}
						with design by{' '}
						<a href='https://www.creative-tim.com?ref=njsmk-footer' target='_blank'>
							Creative Tim
						</a>{' '}
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

export default Footer;
