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
	imgALT: {
		maxHeight: '300px',
		maxWidth: '100%',
	},
	gridItemPadded: {
		padding: '10px',
	},
};

export default productStyle;
