import React from 'react';

import * as style from './Image.style';

export interface ComponentProps {
	src: string;
	title: string;
	alt: string;
}

export const ImageRender: React.FC<ComponentProps> = ({ src, title, alt }) => {
	return (
		<span className={style.imageBox}>
			<img className={style.image} src={src} title={title} alt={alt} />
			{title && <span className={style.imageTitle}>{title}</span>}
		</span>
	);
};

ImageRender.displayName = 'ImageRender';
