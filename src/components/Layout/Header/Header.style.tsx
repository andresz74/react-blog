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
			color: Color.baseline.darkLink,
			textDecoration: 'none',
		},
	},
});

export const themeOptions = s({
	display: 'flex',
});
