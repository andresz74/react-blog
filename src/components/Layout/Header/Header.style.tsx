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
	height: '1.5rem',
	position: 'relative',
});

export const radioButton = s({
	height: '100%',
	width: '3rem',
	left: '3rem',
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

export const darkLabel = s({});

export const lightLabel = s({});

export const toggleOutside = s({
	height: '100%',
	borderRadius: '2rem',
	padding: '1px',
	overflow: 'hidden',
	transition: '0.25s ease all',
	position: 'absolute',
	width: '3rem',
	left: '3rem',
});

export const toogleOutsideDark = s({
	backgroundColor: Color.dark.secondary,
});

export const toggleOutsideLight = s({
	backgroundColor: Color.light.secondary,
});

export const toggleInside = s({
	borderRadius: '5rem',
	position: 'absolute',
	transition: '0.25s ease all',
	height: '1.35rem',
	width: '1.35rem',
	padding: '3px',
});

export const toggleInsideDark = s({
	background: Color.dark.main,
	left: '0.25rem',
});

export const toggleInsideLight = s({
	backgroundColor: Color.light.main,
	left: '1.5rem',
});
