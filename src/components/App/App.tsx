import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as style from './App.style';
import { Blog, BlogPost } from '../Blog';
import { Header } from '../Layout/Header/Header';
import * as Models from 'models';
import { blogName } from 'blog.configuration';

export const App = () => {
	const [theme, setTheme] = React.useState<Models.ThemeType>('light');
	const handleOptionChange = (e: any) => {
		setTheme(e.target.value);
	};

	return (
		<Router>
			<div className={theme === 'dark' ? style.appDark : style.appLight}>
				<Header theme={theme} onChange={handleOptionChange} blogName={blogName} />
				<div className={style.appBox}>
					<Route exact path="/" render={() => <Blog />} />
					<Route path="/blog/:id" component={BlogPost} />
				</div>
			</div>
		</Router>
	);
};

App.displayName = 'App';
