import footerStyle from 'assets/jss/nextjs-material-kit/components/footerStyle.js';

const callToActionStyle = {
	...footerStyle,
	footerWhiteFont: {
		'&,&:hover,&:focus': {
			color: '#FFFFFF',
		},
		backgroundColor: '#696969',
	},
};

export default callToActionStyle;
