import React from 'react';
import { Link } from 'react-router-dom';
import { classes } from 'typestyle';

import * as style from './Header.style';
import { Image } from 'components';

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
						<input
							className={style.radioButton}
							id="dark"
							type="radio"
							name="theme"
							value="dark"
							checked={theme === 'dark'}
							onChange={onChange}
						/>
						<label className={style.darkLabel} htmlFor="dark"></label>
						<input
							className={style.radioButton}
							id="light"
							type="radio"
							name="theme"
							value="light"
							checked={theme === 'light'}
							onChange={onChange}
						/>
						<label className={style.darkLabel} htmlFor="light"></label>
						<span
							className={classes(
								style.toggleOutside,
								theme === 'dark' ? style.toogleOutsideDark : style.toggleOutsideLight,
							)}
						>
							<span
								className={classes(
									style.toggleInside,
									theme === 'dark' ? style.toggleInsideDark : style.toggleInsideLight,
								)}
							>
								<Image
									srcImage={theme === 'dark' ? './moon.svg' : './sun.svg'}
									altText={theme === 'dark' ? 'moon' : 'sun'}
								/>
							</span>
						</span>
					</div>
				</div>
			</div>
		</header>
	);
};

Header.displayName = 'Header';
