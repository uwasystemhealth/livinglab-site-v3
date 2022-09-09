// REACT+NEXT
import React, { Fragment, useContext, useState } from 'react';
import Link from 'next/link';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import PopupState, { bindHover, bindPopover } from 'material-ui-popup-state';
import Popover from 'material-ui-popup-state/HoverPopover';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//CORE COMPONENTS
import Header from 'components/MaterialKit/Header/Header.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import CustomDropdown from 'components/MaterialKit/CustomDropdown/CustomDropdown.js';

import styles from 'assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js';

//OWN COMPONENTS
import Contact from 'components/Layout/Contact';
import Context from 'components/Context/index';

const useStyles = makeStyles(styles);

// EXTENDED MENU OF THE NAVBAR
const MenuPopupState = () => {
	const classes = useStyles();
	return (
		<PopupState variant='popover' popupId='demo-popup-menu' disableAutoFocus>
			{(popupState) => (
				<React.Fragment>
					<Button variant='contained' color='primary' {...bindHover(popupState)} style={{ width: '100%' }}>
						Roadmaps <ExpandMoreIcon></ExpandMoreIcon>
					</Button>
					<Popover
						{...bindPopover(popupState)}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
					>
						<List className={classes.list}>
							<ListItem>
								<Link href='/roadmap/accelerated-life-testing'>
									<a className={classes.dropdownLink}>Accelerated Life Testing</a>
								</Link>
							</ListItem>
							<ListItem>
								<Link href='/roadmap/derisking-site-trials'>
									<a className={classes.dropdownLink}>Derisking Site Trials</a>
								</Link>
							</ListItem>
						</List>
					</Popover>
				</React.Fragment>
			)}
		</PopupState>
	);
};

const Navbar = () => {
	const { openContactFormModal } = useContext(Context);
	const classes = useStyles();
	return (
		<Fragment>
			<Contact></Contact>
			<Header
				color='transparent'
				brandImage={<img id='logo' src='/img/logos/Living-Lab-Logo-WEB-white-without@UWA.png' alt='logo' className={classes.img} />}
				fixed
				changeColorOnScroll={{
					height: 400,
					color: 'white',
				}}
				rightLinks={
					<List className={classes.list}>
						<ListItem className={classes.listItem}>
							<Button href='/' className={classes.navLink} color='transparent'>
								Home
							</Button>
						</ListItem>
						<ListItem className={classes.listItem}>
							<CustomDropdown
								noLiPadding
								navDropdown
								buttonText='Learn More'
								buttonProps={{
									className: classes.navLink,
									color: 'transparent',
								}}
								dropdownList={[
									<Link href='/about'>
										<a className={classes.dropdownLink}>About Us</a>
									</Link>,
									<Link href='/accelerated-life-testing'>
										<a className={classes.dropdownLink}>Accelerated Life Testing Equipment</a>
									</Link>,
									{ divider: true },
									<MenuPopupState />,
								]}
							/>
						</ListItem>
						<ListItem className={classes.listItem}>
							<Button className={classes.navLink} onClick={openContactFormModal} color='transparent'>
								Contact for more Information
							</Button>
						</ListItem>
						<ListItem className={classes.listItem}>
						</ListItem>
					</List>
				}
			/>
		</Fragment>
	);
};

export default Navbar;
