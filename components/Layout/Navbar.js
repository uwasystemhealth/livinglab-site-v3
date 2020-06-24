// REACT+NEXT
import React, { Fragment, useContext } from 'react';
import Link from 'next/link';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//CORE COMPONENTS
import Header from 'components/MaterialKit/Header/Header.js';
import Button from 'components/MaterialKit/CustomButtons/Button.js';
import CustomDropdown from 'components/MaterialKit/CustomDropdown/CustomDropdown.js';

import styles from 'assets/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js';

//OWN COMPONENTS
import Contact from 'components/Layout/Contact';
import Context from 'components/Context/index';

const useStyles = makeStyles(styles);
const Navbar = () => {
	const { openContactFormModal } = useContext(Context);
	const classes = useStyles();
	return (
		<Fragment>
			<Contact></Contact>
			<Header
				color='transparent'
				brandImage={<img id='logo' src='img/logos/Living-Lab-Logo-WEB-white-without@UWA.png' alt='logo' className={classes.img} />}
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
									<Link href='/components'>
										<a className={classes.dropdownLink}>Available Testing</a>
									</Link>,
									<CustomDropdown
										noLiPadding
										navDropdown
										buttonText='Roadmap'
										buttonProps={{
											className: classes.navLink,
											color: 'transparent',
										}}
										dropdownList={[
											<Link href='/components'>
												<a className={classes.dropdownLink}>Accelerated Life Testing</a>
											</Link>,
											<Link href='/components'>
												<a className={classes.dropdownLink}>Site Testing</a>
											</Link>,
											<Link href='/components'>
												<a className={classes.dropdownLink}>More Details About Roadmaps</a>
											</Link>,
										]}
									/>,
								]}
							/>
						</ListItem>
						<ListItem className={classes.listItem}>
							<Button href='' className={classes.navLink} onClick={openContactFormModal} color='transparent'>
								Express Interest
							</Button>
						</ListItem>
						<ListItem className={classes.listItem}>
							<Button href='' className={classes.registerNavLink} onClick={(e) => e.preventDefault()} color='rose' round>
								Login
							</Button>
						</ListItem>
					</List>
				}
			/>
		</Fragment>
	);
};

export default Navbar;
