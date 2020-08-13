import { style as s } from 'typestyle';
import { Helper, Text } from 'style';

export const imageBox = s({
    display: 'block',
	margin: 'auto',
	maxWidth: Helper.goldenRatio,
})

export const image = s({
    display: 'block',
    width: '100%',
});

export const imageTitle = s(Text.base[14], {
	color: 'gray',
	display: 'block',
    fontFamily: Text.Font.secondary,
    lineHeight: 1,
	marginBottom: Helper.remPb(15),
	marginTop: Helper.remPb(5),
});
