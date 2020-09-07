import React, { Fragment, useContext } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// MATERIAL UI ICON
import DownloadIcon from '@material-ui/icons/GetApp';

// material-ui core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Button from 'components/MaterialKit/CustomButtons/Button.js';

//OWN COMPONENTS
import Context from 'components/Context/index';
import GridContainer from 'components/MaterialKit/Grid/GridContainer.js';
import GridItem from 'components/MaterialKit/Grid/GridItem.js';

// STYLES
import styles from 'assets/jss/nextjs-material-kit/components/callToActionStyle.js';
const useStyles = makeStyles(styles);

const CallToAction = (props) => {
	const classes = useStyles();

	const { openContactFormModal } = useContext(Context);

	const footerClasses = classNames({
		[classes.footer]: true,
		[classes.footerWhiteFont]: true,
	});

	return (
		<Fragment>
			<section className={footerClasses}>
				<div className={classes.container}>
					<h3>Connect With Us?</h3>
					<br />
					<p>
						We have a proven track record of designing testing equipment and tests. By sharing our highly developed systems and processes
						with innovators we’re perfectly placed to support WA-based businesses.
					</p>
					<br />
					<GridContainer justify="center" alignItems="center">
						<GridItem xs={8}>
							<GridContainer>
								<GridItem md={6}>
									<Button color='primary' onClick={openContactFormModal}>
										Get Involved
									</Button>
								</GridItem>
								<GridItem md={6}>
									<Button href="https://drive.google.com/file/d/1qF03s0Mela-LMPy3dd5s6hI0qKuQndnX/view?usp=sharing" color="success" external><DownloadIcon/>	Download Brochure</Button>
								</GridItem>
							</GridContainer>
						</GridItem>
					</GridContainer>
				</div>
			</section>
		</Fragment>
	);
};

export default CallToAction;
