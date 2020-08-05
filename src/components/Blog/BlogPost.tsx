import React from 'react';
import ReactMarkdown from 'react-markdown';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export interface ComponentProps {
	// post?: string;
}

const firebaseConfig = {
	apiKey: 'AIzaSyDOEQJXdOtapUx0GpC4VWeZzqVdRP_p3HA',
	authDomain: 'reactblogmd.firebaseapp.com',
	databaseURL: 'https://reactblogmd.firebaseio.com',
	projectId: 'reactblogmd',
	storageBucket: 'reactblogmd.appspot.com',
	messagingSenderId: '534489159944',
	appId: '1:534489159944:web:c4118dc184b020d793f4bd',
};
// gs://reactblogmd.appspot.com/assets/md/post.md
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export const BlogPost: React.FC<ComponentProps> = ({}) => {
	const [post, setPost] = React.useState('');

	const getPost = async () => {
		const gsReference = storage.refFromURL('gs://reactblogmd.appspot.com/assets/md/post.md');
		gsReference.getDownloadURL().then(url => {
			fetch(url)
				.then(res => res.text())
				.then(text => setPost(text));
		});
	};
	React.useEffect(() => {
		getPost();
	}, []);
	return <ReactMarkdown source={post} />;
};

BlogPost.displayName = 'BlogPost';
