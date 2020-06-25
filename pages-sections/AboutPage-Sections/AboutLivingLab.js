import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

const AboutLivingLab = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<a className={classes.anchor} id='WhatIsTheLab'></a>
			<h2 className={classes.title}>About The Living Lab</h2>
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<h5 className={classes.description}>
						One of the main areas of development for the Australian METS sector is WiFi-enabled digital-electronic sensing systems, commonly
						known as Internet-of Things (IoT) applications to enable Industry 4.0. Examples include asset health, ground control and
						environmental monitoring, and sensing systems for use one robotics and drones. However in Australia it is difficult for
						developers of these new digital sensing systems to test new electronic products in an industry setting and a time-efficient way,
						and hence to be able to deliver current, commercial solutions to the resources sector.
					</h5>
					<h5 className={classes.description}>
						In 2018 METS Ignited issued a call for interested parties to develop real or near real-world testing environments to form a
						network of “Living Labs” across Australia. The METS Ignited-BHP Fellowship-UWA-CORE supported Living Lab@UWA is the first of
						these. We have developed a) accelerated life testing and b) business processes to derisk site trials for IOT products.{' '}
					</h5>
					<h5 className={classes.description}>
						The LivingLab@UWA leverages testing equipment (e.g. ovens, vibration shakers, UV rigs, IP ingress) to perform accelerated life
						testings and can also place IOT products on infrastructure available at the university. Testing is done by the System Health Lab
						engineers providing valuable work experience for the students involved.{' '}
					</h5>
					<h5 className={classes.description}>To date the LivingLab@UWA team has delivered the following: </h5>
					<ul className={classes.description}>
						<li> UV, vibration and IP reliability assessment for MEMS-IOT device for major mining company.</li>
						<li> Performance testing of wireless MEMS-IOT vibration unit developed at UWA on rotating equipment</li>
						<li>
							Understanding of how to access the asset registers for university infrastructure equipment and test equipment held by
							academics in their labs.
						</li>
						<li> Administrative, legal, safety and technical procedures to support university site trials and derisk mine site trials</li>
						<li>
							Procedures for testing for UV, vibration, IP and EMC reliability to improve reliability and derisk certification testing.
						</li>
						<li>A set of checklists, co-developed with mining and METS companies, for mine site trial</li>
					</ul>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<img src='/img/wrapper-img.png' alt='' className={classes.img} />
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default AboutLivingLab;
