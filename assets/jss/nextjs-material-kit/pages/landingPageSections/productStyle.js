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
	},
	description: {
		color: '#999',
	},
	img: {
		maxHeight: '100%',
		maxWidth: '100%',
	},
	gridContainerNoSpacing: {
		padding:"0px"
	}
};

export default productStyle;
