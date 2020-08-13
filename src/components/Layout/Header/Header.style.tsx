import { style as s } from 'typestyle';
import { Color, Helper } from 'style';

export const appHeader = s({
	boxShadow: `0px ${Helper.remPb(20)} ${Helper.remPb(20)} ${Helper.remPb(-10)} rgba(0,0,0,0.15)`,
	marginBottom: Helper.remPb(25),
});

export const headerBox = s({
	alignContent: 'center',
	alignItems: 'center',
	display: 'flex',
	margin: 'auto',
	paddingBottom: Helper.remPb(20),
	paddingTop: Helper.remPb(20),
	maxWidth: '61.8%',
});

export const blogTitle = s({
	display: 'flex',
	flex: '1 1 auto',
	$nest: {
		a: {
			textDecoration: 'none',
		},
	},
});

export const darkLink = s({
	color: Color.baseline.darkLink,
});

export const lightLink = s({
	color: Color.baseline.lightLink,
});

export const themeOptions = s({
	display: 'flex',
});

export const switchBox = s({
	height: '20px',
	position: 'relative',
});

export const radioButton = s({
	height: '3rem',
	width: '6rem',
	left: '6rem',
	margin: 0,

	position: 'absolute',
	top: 0,
	zIndex: 2,
	opacity: 0,
	cursor: 'pointer',
	$nest: {
		'&:checked': {
			zIndex: 1,
		},
	},
});

export const toggleDark = s({
	left: '0.25rem', // left: 3.25rem;
});

export const toggleLight = s({
	left: '1.75rem',
});

export const toggleOutside = s({
	height: '100%',
	borderRadius: '2rem',
	padding: '2px',
	overflow: 'hidden',
	transition: '0.25s ease all',
	background: 'red',
	position: 'absolute',
	width: '3rem',
	left: '6rem',
});

export const toggleInside = s({
	borderRadius: '5rem',
	background: '#4a4a4a',
	position: 'absolute',
	transition: '0.25s ease all',
	height: '16px',
	width: '16px',
});
