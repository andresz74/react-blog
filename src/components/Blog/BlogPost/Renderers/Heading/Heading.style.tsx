import { style as s } from 'typestyle';
import { Text, Helper } from 'style';

export const heading1 = s({
	fontSize: Helper.remPb(40),
	fontWeight: 400,
	lineHeight: '1.23',
	marginTop: Helper.remPb(30),
});

export const heading2 = s({
	fontFamily: Text.Font.secondary,
	fontSize: Helper.remPb(36),
	fontWeight: 400,
	lineHeight: '1.12',
	marginTop: Helper.remPb(45),
});

export const heading3 = s({
	fontSize: Helper.remPb(21),
	fontWeight: 400,
	lineHeight: '1.58',
	marginTop: Helper.remPb(42),
});

export const heading4 = s({});

export const heading5 = s({});

export const heading6 = s({});
