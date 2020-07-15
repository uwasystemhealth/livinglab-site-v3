import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

//STYLES
import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';
const useStyles = makeStyles(styles);

// DATA
import TEAM from 'data/Team.json';

const MeetTheTeam = () => {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<a className={classes.anchor} id='MeetTheTeam'></a>
			<h2 id='MeetTheTeam' className={classes.title}>
				Meet The Team
			</h2>
			<GridContainer>
				<GridItem xs={12}>
					<GridContainer>
						{TEAM.map(
							({
								firstName,
								lastName,
								bio = 'Insert Bio',
								picture = `/img/team/${firstName.toLowerCase()}-${lastName.toLowerCase()}.jpg`,
							}) => (
								<GridItem xs={12} md={12} key={`${firstName}-${lastName}`}>
									<GridContainer>
										<GridItem xs={12} md={2}>
											<div className={classes.imgList} style={{ backgroundImage: `url(${picture})` }}></div>
										</GridItem>
										<GridItem xs={12} md={10}>
											<h5 className={classes.description} dangerouslySetInnerHTML={{ __html: bio }}></h5>
										</GridItem>
									</GridContainer>
								</GridItem>
							)
						)}
					</GridContainer>
				</GridItem>
			</GridContainer>
		</div>
	);
};

export default MeetTheTeam;
