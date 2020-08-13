import React from 'react';

import { IconData, ImportConfig } from './Icon.interface';

export interface ComponentProps {
	size?: number;
	width?: number;
	height?: number;
	className?: string;
	color?: string;
	strokeWidth?: number;
	strokeColor?: string;
	fillOpacity?: number;
	strokeOpacity?: number;
	inline?: boolean;
	hoverColor?: string;
	description?: string;
}

export const Iconify = (getConfig: (data: IconData) => ImportConfig): React.FC<ComponentProps> => {
	let iconConfig: ImportConfig;
	const Icon: React.FC<ComponentProps> = () => {
		const [isLoaded, setIsLoaded] = React.useState<boolean>(!!iconConfig);
		React.useEffect(() => {
			let subscribed = true;
			const getData = async () => {
				if (!isLoaded) {
					const data = await import('./Icon.data');
					iconConfig = getConfig(data.default);
					if (subscribed) {
						setIsLoaded(true);
					}
				}
			};
			getData();
			return () => {
				subscribed = false;
			};
		}, []);
		return <>{'Hello icon'}</>;
	};
	Icon.displayName = 'Icon';
	return Icon;
};
