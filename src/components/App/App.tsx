import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Blog, BlogPost } from '../Blog';

export const App = () => {
	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<h1>Blog</h1>
				</header>
				<Route exact path="/" render={() => <Blog />} />
				<Route path="/blog/:id" component={BlogPost} />
			</div>
		</Router>
	);
};

App.displayName = 'App';
