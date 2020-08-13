import React from 'react';
import { Link } from 'react-router-dom';

import * as style from './Header.style';
import { classes } from 'typestyle';

export interface ComponentProps {
	blogName: string;
	theme: string;
	onChange: (e: any) => void;
}

export const Header: React.FC<ComponentProps> = ({ blogName, theme, onChange }) => {
	return (
		<header className={style.appHeader}>
			<div className={style.headerBox}>
				<div className={style.blogTitle}>
					<Link to="/">
						<h1 className={theme === 'light' ? style.darkLink : style.lightLink}>{blogName}</h1>
					</Link>
				</div>
				<div className={style.themeOptions}>
					{/* <label>
						<input type="radio" id="dark" name="theme" value="dark" checked={theme === 'dark'} onChange={onChange} />
						<span>Dark</span>
					</label>

					<label>
						<input type="radio" id="light" name="theme" value="light" checked={theme === 'light'} onChange={onChange} />
						<span>Light</span>
					</label> */}
					<div className={style.switchBox}>
						<input className={style.radioButton} id="dark" type="radio" name="theme" value="dark" checked={theme === 'dark'} onChange={onChange}/>
						<label htmlFor="dark">dark</label>
						<input className={style.radioButton} id="light" type="radio" name="theme" value="light" checked={theme === 'light'} onChange={onChange}/>
						<label htmlFor="light">light</label>
						<span className={style.toggleOutside}>
							<span className={classes(style.toggleInside, theme === 'dark'? style.toggleDark : style.toggleLight )}></span>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

Header.displayName = 'Header';
