import { style as s } from 'typestyle';
import { Text, Helper } from 'style';

export const heading1 = s(Text.base[40], {
	fontWeight: 400,
	lineHeight: '1.23',
	marginTop: Helper.remPb(30),
});

export const heading2 = s(Text.base[32], {
	fontFamily: Text.Font.secondary,
	fontWeight: 400,
	lineHeight: '1.12',
	marginTop: Helper.remPb(45),
});

export const heading3 = s({
	fontSize: Helper.remPb(24),
	fontWeight: 400,
	lineHeight: '1.58',
	marginTop: Helper.remPb(42),
});

export const heading4 = s({});

export const heading5 = s({});

export const heading6 = s({});
