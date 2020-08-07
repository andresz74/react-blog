import { style as s } from 'typestyle';

export const appDark = s({
	backgroundColor: '#282c34',
	color: '#fff',
	$nest: {
		a: {
			color: 'gray',
		},
	},
});

export const appLight = s({
	backgroundColor: '#fff',
	color: '#282c34',
	$nest: {
		a: {
			color: 'gray',
		},
	},
});

export const appBox = s({
    margin: 'auto',
    maxWidth: '61.8%',
    minHeight: '100vh',
    paddingBottom: '100px',
});
