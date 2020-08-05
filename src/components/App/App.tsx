import React from 'react';
import './App.css';
import { Blog } from '../Blog';

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Blog</h1>
				<Blog />
			</header>
		</div>
	);
};

App.displayName = 'App';
