import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig, firebaseStorageUrl, firebaseAssetsMd } from 'firebase.configuration';

import { uuid } from 'utility';

// Initialize Firebase if it hasn't been initialize by other component
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

const storageRef = firebase.storage().ref();

export const BlogPostUpload = () => {
	const [title, setTitle] = React.useState<string>('');
	const [intro, setIntro] = React.useState<string>('');
	const [file, setFile] = React.useState<File | null>(null);

	const renameFile = (originalFile: File, newName: string) => {
		return new File([originalFile], newName, {
			type: originalFile.type,
			lastModified: originalFile.lastModified,
		});
	};

	const formatNumberToString = (number: number): string => {
		if (number < 10) {
			return `0${number}`;
		} else {
			return `${number}`;
		}
	};

	const onSubmitPost = (e: React.MouseEvent) => {
		const date = new Date();
		const year = date.getFullYear();
		const month = formatNumberToString(date.getMonth() + 1);
		const dateDay = date.getDate();
		const hours = formatNumberToString(date.getHours());
		const minutes = formatNumberToString(date.getMinutes());
		const filename = `${year}-${month}-${dateDay}-${hours}-${minutes}-${uuid()}.md`;
		// const newFile = file && renameFile(file, filename);
		e.preventDefault();
		// console.log(newFile);
		file &&
			storageRef
				.child(`${firebaseAssetsMd}/${filename}`)
				.put(file)
				.then(function (snapshot) {
					console.log('Uploaded a blob or file!');
				});
	};

	React.useEffect(() => {
		console.log(file);
	}, [file]);
	return (
		<>
			<div>
				<input
					type="text"
					name="blogTitle"
					placeholder="Blog Title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<textarea name="blogIntro" value={intro} placeholder="Blog Intro" onChange={e => setIntro(e.target.value)} />
			</div>
			<div>
				<input
					type="file"
					accept="text/markdown, .md"
					onChange={e => e.currentTarget.files && setFile(e.currentTarget.files[0])}
				/>
			</div>
			<button onClick={onSubmitPost}>Submit</button>
		</>
	);
};

BlogPostUpload.displayName = 'BlogPostUpload';
