import { title, anchor, container } from 'assets/jss/nextjs-material-kit.js';

const productStyle = {
	anchor,
	descriptionContainer: {
		...container,
		margin: '0px 10px',
	},
	section: {
		padding: '70px 0',
		textAlign: 'left',
	},
	title: {
		...title,
		marginBottom: '1rem',
		marginTop: '30px',
		minHeight: '32px',
		textDecoration: 'none',
		textAlign: 'center',
	},
	description: {
		color: '#000',
	},
	img: {
		maxHeight: '100%',
		maxWidth: '100%',
	},
	video: {
		width: '100%',
		height: '100%',
		minHeight: '300px',
	},
	imgALT: {
		maxHeight: '300px',
		maxWidth: '100%',
	},
	imgList: {
		minHeight: '200px',
		maxWidth: '200px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		margin: 'auto',
	},
	gridItemPadded: {
		padding: '10px',
	},
	partnersSection: {
		padding: '30px',
	},
	whiteFont: {
		color: '#FFFFFF',
	},
	partnersLogo: {
		maxHeight: '200px',
		maxWidth: '100%',
	},
};

export default productStyle;
