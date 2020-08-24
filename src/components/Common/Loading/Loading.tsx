import React from 'react';
import { Image } from '../Image';

export const Loading = () => {
	return (
		<>
			Loading...
			<Image srcImage={'./Loading.svg'} altText={'Loading'} />
		</>
	);
};

Loading.displayName = 'Loading';
