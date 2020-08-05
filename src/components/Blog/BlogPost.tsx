import React from 'react';
import ReactMarkdown from 'react-markdown';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig } from '../../firebase.configuration';

export interface ComponentProps {
	postRef: string;
}

// gs://reactblogmd.appspot.com/assets/md/post.md
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();

export const BlogPost: React.FC<ComponentProps> = ({ postRef }) => {
	const [post, setPost] = React.useState('');

	const getPost = async () => {
		// const gsReference = storage.refFromURL(`'gs://reactblogmd.appspot.com/assets/md/2020.08.03.md'`);
		const gsReference = storage.refFromURL(`gs://${postRef}`);
		gsReference
			.getDownloadURL()
			.then(url => {
				fetch(url)
					.then(res => res.text())
					.then(text => setPost(text))
					.catch(e => console.warn(e));
			})
			.catch(e => console.warn(e));
	};
	React.useEffect(() => {
		getPost();
	}, []);
	return <ReactMarkdown source={post} />;
};

BlogPost.displayName = 'BlogPost';
