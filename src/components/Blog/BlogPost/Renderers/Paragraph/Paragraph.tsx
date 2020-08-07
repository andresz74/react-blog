import React from 'react';

import * as style from './Paragraph.style';

export interface ComponentProps {}

export const ParagrapRender: React.FC<ComponentProps> = ({ children }) => {
	return <p className={style.paragraph}>{children}</p>;
};

ParagrapRender.displayName = 'ParagraphRender';
