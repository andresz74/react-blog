import { style as s } from 'typestyle';
import { Color, Helper, Text } from 'style';

export const blogList = s({
	display: 'flex',
	flexDirection: 'column',
});

export const blogItemBox = s({
	display: 'flex',
	flexDirection: 'column',
	marginBottom: Helper.remPb(50),
});

export const blogItemBoxDark = s({});

export const blogItemBoxLight = s({});

export const blogLink = s({
	textDecoration: 'none',
});

export const blogImage = s({});

export const tagsBox = s({
    alignItems: 'center',
	display: 'flex',
    flexDirection: 'row',
	fontSize: Helper.remPb(12),
    height: Helper.remPb(32),
});

export const tag = s({
	display: 'flex',
	flexDirection: 'row',
});

export const titleIntroBox = s({
	margin: 'auto',
	width: Helper.blogPer,
});

export const blogTitle = s(Text.base[24], {
	display: 'flex',
	fontWeight: 'bold',
});

export const blogTitleDark = s({
	color: Color.baseline.lightLink,
});

export const blogTitleLight = s({
	color: Color.baseline.darkLink,
});

export const blogIntro = s(Text.base[14], {
	lineHeight: Helper.remPb(24),
});
