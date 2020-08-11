import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

// SECTION
import AboutPartners from 'pages-sections/AboutPage-Sections/Partners';

const AboutLivingLab = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<a className={classes.anchor} id='WhatIsTheLab'></a>
			<h2 className={classes.title}>Foundation of the Living Lab</h2>
			<GridContainer>
				<GridItem xs={12} sm={12} md={8}>
					<h5 className={classes.description}>
						One of the main areas of development for the Australian METS sector is WiFi-enabled digital-electronic sensing systems, commonly
						known as Internet-of Things (IoT) applications, which will power Industry 4.0. Examples include asset health, ground control and
						environmental monitoring, and sensing systems for use on robotics and drones. However, in Australia it is difficult for
						developers of these new digital sensing systems to efficiently test new electronic products in an industry setting. This proves
						a significant barrier in being able to deliver current, commercial solutions to the resources sector.
					</h5>
					<h5 className={classes.description}>
						In 2018 METS Ignited issued a call for interest to develop real or near real-world testing environments to form a network of
						“Living Labs” across Australia. Supported by METS Ignited, BHP Fellowship, UWA, CORE Innovation Hub, the Living Lab @UWA is the
						first of these. We deliver two key support pathways for innovators: Accelerated Life Testing and Derisking Site Trials for
						MEMS-IoT products.
					</h5>
					<h5 className={classes.description}>
						The Living Lab @UWA leverages testing equipment (e.g. ovens, vibration shakers, UV rigs, IP ingress) to perform accelerated life
						testings and can also place IoT products on infrastructure available at the University. Testing is done by the System Health Lab
						engineers providing valuable industry experience for the students involved.
					</h5>
					<h5 className={classes.description}>To date the Living Lab @UWA team has delivered the following: </h5>
					<ul className={classes.description}>
						<li> UV, vibration and IP reliability assessment for MEMS-IoT device for major resources company.</li>
						<li> Performance testing of wireless MEMS-IoT vibration unit developed at UWA on rotating equipment</li>
						<li>
							Understanding of how to access the asset registers for university infrastructure equipment and test equipment held by
							academics in their labs.
						</li>
						<li> Administrative, legal, safety and technical procedures to support university site trials and derisk mine site trials</li>
						<li>
							Procedures for testing for UV, vibration, IP and EMC reliability to improve reliability and derisk certification testing.
						</li>
						<li>A set of checklists, co-developed with resources and METS companies, for mine site trial</li>
					</ul>
				</GridItem>
				<GridItem xs={12} sm={12} md={4}>
					<AboutPartners></AboutPartners>
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default AboutLivingLab;
