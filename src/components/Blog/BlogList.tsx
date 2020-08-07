import React from 'react';
import { Link } from 'react-router-dom';
import { refItemInterface } from './Blog';

export interface ComponentProps {
	listRef: refItemInterface[];
}

export const BlogList: React.FC<ComponentProps> = ({ listRef }) => {
	React.useEffect(() => {}, []);
	return (
		<>
			{listRef.map(l => {
				return (
					<Link to={`/blog/${l.postId}`} key={l.postUrl}>
						<p>{l.postUrl}</p>
					</Link>
				);
			})}
		</>
	);
};

BlogList.displayName = 'BlogList';
