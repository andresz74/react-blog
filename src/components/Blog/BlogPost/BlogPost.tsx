import React from 'react';
import ReactMarkdown from 'react-markdown';
import { RouteComponentProps } from 'react-router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig, firebaseStorageUrl, firebaseAssetsMd } from 'firebase.configuration';
import { Loading } from '../../Common';
import { HeadingRender, ImageRender, ParagrapRender } from './Renderers';

export interface ComponentProps {}

export type AllProps = ComponentProps & RouteComponentProps;

export interface ParamsInterface {
	id?: string;
}

// Initialize Firebase if it hasn't been initialize by other component
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();

const renderers = {
	heading: HeadingRender,
	image: ImageRender,
	paragraph: ParagrapRender,
};

export const BlogPost: React.FC<AllProps> = ({ match }) => {
	const [loading, setLoading] = React.useState<boolean>(true);
	const [post, setPost] = React.useState('');

	const getPost = async (filename: string) => {
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
		const postFile: string = params.id ? params.id : '';
		getPost(postFile);
	}, [match.params]);
	return loading ? (
		<Loading />
	) : (
		<ReactMarkdown source={post} escapeHtml={true} skipHtml={true} renderers={renderers} />
	);
};

BlogPost.displayName = 'BlogPost';
