import footerStyle from 'assets/jss/nextjs-material-kit/components/footerStyle.js';

const callToActionStyle = {
	...footerStyle,
	footerWhiteFont: {
		'&,&:hover,&:focus': {
			color: '#FFFFFF',
		},
		backgroundColor: '#707A7F',
	},
};

export default callToActionStyle;
