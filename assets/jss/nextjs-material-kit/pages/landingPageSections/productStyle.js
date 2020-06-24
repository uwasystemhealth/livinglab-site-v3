import { title,anchor } from 'assets/jss/nextjs-material-kit.js';

const productStyle = {
	anchor,
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
	},
	description: {
		color: '#999',
	},
	img: {
		maxHeight: '100%',
		maxWidth: '100%',
	},
};

export default productStyle;
