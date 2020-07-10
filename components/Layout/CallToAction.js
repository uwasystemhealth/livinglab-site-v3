import React, { Fragment, useContext } from 'react';

// nodejs library that concatenates classes
import classNames from 'classnames';

// material-ui core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Button from 'components/MaterialKit/CustomButtons/Button.js';

//OWN COMPONENTS
import Context from 'components/Context/index';

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
					<h3>Why Connect With Us?</h3>
					<br />
					<p>
						We have a track record of being able to design testing equipment and tests. We have systems and processes in place. We know how
						to collaborate. We are here to support WA based businesses.
					</p>
					<br />
					<Button color='primary' onClick={openContactFormModal}>
						Get Involved
					</Button>
				</div>
			</section>
		</Fragment>
	);
};

export default CallToAction;
