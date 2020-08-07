import React from 'react';
import ReactMarkdown from 'react-markdown';
import { RouteComponentProps } from 'react-router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig, firebaseStorageUrl, firebaseAssetsMd } from '../../../firebase.configuration';
import { Loading } from '../../Common';
import { ImageRender } from './Renderers/Image/Image';

export interface ComponentProps {
	// postRef: string;
}

export type AllProps = ComponentProps & RouteComponentProps;

export interface ParamsInterface {
	id?: string;
}

// gs://reactblogmd.appspot.com/assets/md/post.md
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();

const renderers = {
	image: ImageRender,
};

export const BlogPost: React.FC<AllProps> = ({ match }) => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [post, setPost] = React.useState('');

	const getPost = async (filename: string) => {
		// const gsReference = storage.refFromURL(`'gs://reactblogmd.appspot.com/assets/md/2020.08.03.md'`);
		const gsReference = storage.refFromURL(`${firebaseStorageUrl}/${firebaseAssetsMd}/${filename}.md`);
		gsReference
			.getDownloadURL()
			.then(url => {
				fetch(url)
					.then(res => res.text())
					.then(text => {
						setLoading(false);
						setPost(text);
					})
					.catch(e => console.warn(e));
			})
			.catch(e => console.warn(e));
	};
	React.useEffect(() => {
		const params: ParamsInterface = match.params;
		const postFile: string = params.id ? params.id.split('-').join('.') : '';
		getPost(postFile);
	}, [match.params]);
	return loading ? (
		<Loading />
	) : (
		<ReactMarkdown source={post} escapeHtml={true} skipHtml={true} renderers={renderers} />
	);
};

BlogPost.displayName = 'BlogPost';
