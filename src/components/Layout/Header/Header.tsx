import React from 'react';

import * as style from './Header.style';

export interface ComponentProps {
	theme: string;
	onChange: (e: any) => void;
}

export const Header: React.FC<ComponentProps> = ({ theme, onChange }) => {
	return (
		<header className={style.appHeader}>
			<div className={style.headerBox}>
				<div className={style.blogTitle}>
					<h1>Blog</h1>
				</div>
				<div className={style.themeOptions}>
					<label>
						<input type="radio" id="dark" name="theme" value="dark" checked={theme === 'dark'} onChange={onChange} />
						<span>Dark</span>
					</label>

					<label>
						<input type="radio" id="light" name="theme" value="light" checked={theme === 'light'} onChange={onChange} />
						<span>Light</span>
					</label>
				</div>
			</div>
		</header>
	);
};

Header.displayName = 'Header';
