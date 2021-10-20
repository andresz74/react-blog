import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { BlogPostInterface } from 'models';
import { Helper } from 'style';
import { uuid } from 'utility';
import * as style from './BlogList.style';
import { classes, style as s } from 'typestyle';

export interface ComponentProps {
	theme: string;
	listRef: BlogPostInterface[];
}

const getImageBackground = (imageUrl: string) => {
	return s({
		backgroundImage: `url(${imageUrl})`,
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		borderRadius: Helper.remPb(5),
		height: Helper.remPb(400),
		marginBottom: Helper.remPb(20),
		width: '100%',
	});
};

export const BlogList: React.FC<ComponentProps> = ({ theme, listRef }) => {
	React.useEffect(() => {}, []);
	return (
		<div className={style.blogList}>
			{listRef.map(l => {
				console.log(l.blogDate)
				return (
					<div
						className={classes(style.blogItemBox, theme === 'dark' ? style.blogItemBoxDark : style.blogItemBoxLight)}
						key={l.blogId}
					>
						{/* Blog Image */}
						<Link className={style.blogLink} to={`/blog/${l.blogId}`}>
							<div className={classes(l.blogImage && getImageBackground(l.blogImage), style.blogImage)}></div>
						</Link>

						{/* Blog Title, Blog Intro */}
						<div className={style.titleIntroBox}>
							<span className={classes(style.blogTitle)}>
								<Link className={style.blogLink} to={`/blog/${l.blogId}`}>
									<span className={theme === 'dark' ? style.blogTitleDark : style.blogTitleLight}>{l.blogTitle}</span>
								</Link>
							</span>

							{/* Blog Tags */}
							<div className={style.tagsBox}>
								<span>Tags:&nbsp;</span>
								{l.blogTags && l.blogTags.map(tag => <span className={style.tag} key={uuid()}>{`${tag}/`}</span>)}
							</div>
							{/* <span>{format(l.blogDate, 'MMMM dd, yyyy')}</span> */}

							<p className={style.blogIntro}>{l.blogIntro}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

BlogList.displayName = 'BlogList';
