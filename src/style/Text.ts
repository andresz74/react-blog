import { fontFace } from 'typestyle';

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
