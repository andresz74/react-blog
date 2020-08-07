import React from 'react';

import * as style from './Image.style';

export interface ComponentProps {
	src: string;
	title: string;
	alt: string;
}

export const ImageRender: React.FC<ComponentProps> = ({ src, title, alt }) => {
	return (
		<>
			<img className={style.image} src={src} title={title} alt={alt} />
			{title && <span className={style.imageTitle}>{title}</span>}
		</>
	);
};

ImageRender.displayName = 'ImageRender';
