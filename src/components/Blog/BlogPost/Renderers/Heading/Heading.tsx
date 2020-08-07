import React from 'react';

import * as style from './Heading.style';
export interface ComponentProps {
	level: number;
}

export const HeadingRender: React.FC<ComponentProps> = ({ children, level }) => {
	switch (level) {
		case 1:
			return <h1 className={style.heading1}>{children}</h1>;
		case 2:
			return <h2 className={style.heading2}>{children}</h2>;
		case 3:
			return <h3 className={style.heading3}>{children}</h3>;
		case 4:
			return <h4 className={style.heading4}>{children}</h4>;
		case 5:
			return <h5 className={style.heading5}>{children}</h5>;
		case 6:
			return <h6 className={style.heading6}>{children}</h6>;
		default:
			return <>{children}</>;
	}
};

HeadingRender.displayName = 'HeadingRender';
