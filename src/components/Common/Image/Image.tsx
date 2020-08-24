import React from 'react';

export interface ComponentProps {
	srcImage: string;
	altText: string;
}

export const Image: React.FC<ComponentProps> = ({ srcImage, altText }) => {
	const [image, setImage] = React.useState<string | null>(null);
	React.useEffect(() => {
		let subscribed = true;
		const loadImage = async () => {
			const data = await import(`${srcImage}`);
			if (subscribed) {
				setImage(data.default);
			}
		};
		loadImage();
		return () => {
			subscribed = false;
		};
	}, [srcImage]);
	return !image ? null : <img src={image} alt={altText} />;
};

// export const Image: React.FC<ComponentProps> = ({ srcImage }) => {
// 	const [image, setImage] = React.useState<string | null>(null);
// 	React.useEffect(() => {
// 		let subscribed = true;
//         const data = require(`${srcImage}`);
//         if (subscribed) {
//             setImage(data);
//         }
// 		return () => {
// 			subscribed = false;
// 		};
// 	}, [srcImage]);
// 	return !image ? null : <img src={image} alt={'Hello'} />;
// };

Image.displayName = 'Image';
