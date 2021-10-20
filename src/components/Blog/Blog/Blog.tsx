import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig, firebaseStorageUrl, firebaseAssetsMd, blogDbCollection } from 'firebase.configuration';
import { BlogPostInterface } from 'models';
import { BlogList } from 'components';

// Initialize Firebase if it hasn't been initialize by other component
let app;
if (!firebase.apps.length) {
	app = firebase.initializeApp(firebaseConfig);
}

export interface ComponentProps {
	theme: string
}

// Initialize Firebase Storage
// const storage = firebase.storage();
const db = firebase.firestore(app);
const blogRef = db.collection(blogDbCollection);
const getBlogList = async () => {
	const snapshot = await blogRef.get();
	const data: BlogPostInterface[] = [];
	snapshot.forEach(doc => {
		data.push({
			blogId: doc.id,
			blogTitle: doc.data().title,
			blogIntro: doc.data().intro,
			blogImage: doc.data().image,
			blogTags: doc.data().tags,
			blogDate: doc.data().date,
		});
	});
	return data;
};

export const Blog: React.FC<ComponentProps> = ({theme}) => {
	const [blogList, setBlogList] = React.useState<BlogPostInterface[]>([]);
	React.useEffect(() => {
		getBlogList().then(response => setBlogList(response));
	}, []);
	return <BlogList theme={theme} listRef={blogList} />;
};

Blog.displayName = 'Blog';
