import { fontFace } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { Helper } from 'style';

fontFace({
	fontFamily: 'Lora Regular',
	fontDisplay: 'swap',
	fontStyle: 'normal',
	fontWeight: '400',
	src:
		// tslint:disable-next-line:max-line-length
		// `url(https://fonts.gstatic.com/s/lora/v16/0QI6MX1D_JOuGQbT0gvTJPa787weuxJBkqt8ndeYxZ0.woff) format('woff');`,
		`url('/_static/fonts/Lora-Regular.woff') format('woff');`,
});

fontFace({
	fontFamily: 'RobotoSlab Medium',
	fontDisplay: 'swap',
	fontStyle: 'normal',
	fontWeight: '300',
	src:
		// tslint:disable-next-line:max-line-length
		// `url(https://fonts.gstatic.com/s/robotoslab/v12/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjo0oSmb2RlV9Su1cai.woff) format('woff')`,
		`url('/_static/fonts/RobotoSlab-Medium.woff') format('woff')`,
});

export const Font = {
	primary: `'Lora', Georgia, Cambria, "Times New Roman", Times, serif`,
	secondary: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
};

export const responsiveSize: { [key: string]: string } = {
	14: `${Helper.remPb(14)}`,
	16: `${Helper.remPb(16)}`,
	24: `${Helper.remPb(24)}`,
	32: `${Helper.remPb(32)}`,
	40: `${Helper.remPb(40)}`,
};

export const base: { [key: string]: NestedCSSProperties } = {
	14: {
		fontSize: responsiveSize[14],
		letterSpacing: 0,
	},
	16: {
		fontSize: responsiveSize[16],
		letterSpacing: 0,
	},
	24: {
		fontSize: responsiveSize[24],
		letterSpacing: 0,
	},
	32: {
		fontSize: responsiveSize[32],
		letterSpacing: 0,
	},
	40: {
		fontSize: responsiveSize[40],
		letterSpacing: 0,
	},
};
