import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig, firebaseStorageUrl, firebaseAssetsMd } from '../../firebase.configuration';
import { BlogList } from './BlogList';

// gs://reactblogmd.appspot.com/assets/md/post.md
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export interface refItemInterface {
	postUrl: string;
	postId: string;
}

export interface ComponentProps {}

const storage = firebase.storage();

export const Blog: React.FC<ComponentProps> = () => {
	const [listref, setListRef] = React.useState<refItemInterface[]>([]);
	React.useEffect(() => {
		const gsReference = storage.refFromURL(`${firebaseStorageUrl}/${firebaseAssetsMd}`);
		const list: refItemInterface[] = [];
		gsReference
			.listAll()
			.then(res => {
				// res.prefixes.forEach(f => console.log(f));
				res.items.forEach(i => {
					list.push({
						postUrl: `${i.bucket}/${i.fullPath}`,
						postId: i.fullPath.split(`${firebaseAssetsMd}/`).join('').split('.md').join('').split('.').join('-'),
					});
				});
				setListRef(list);
			})
			.catch(e => console.warn(e));
	}, []);
	return <BlogList listRef={listref} />;
};

Blog.displayName = 'Blog';
