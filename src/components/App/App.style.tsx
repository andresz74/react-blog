import { style as s } from 'typestyle';
import { Color, Helper, Text } from 'style';

export const appDark = s({
	backgroundColor: Color.dark.main,
	color: Color.dark.secondary,
	$nest: {
		a: {
			color: Color.dark.link,
		},
	},
});

export const appLight = s({
	backgroundColor: Color.light.main,
	color: Color.light.secondary,
	$nest: {
		a: {
			color: Color.light.link,
		},
	},
});

export const appBox = s({
	fontFamily: Text.Font.primary,
	margin: 'auto',
	maxWidth: Helper.goldenRatio,
	minHeight: '100vh',
	paddingBottom: Helper.remPb(100),
});
