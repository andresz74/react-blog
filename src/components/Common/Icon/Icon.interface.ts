export interface ImportConfig {
	path?: string;
	fill?: string;
	viewBox?: string;
	flipVertical?: boolean;
	image?: React.ReactChild;
	width?: number;
	height?: number;
	strokeWidth?: number;
	// option for multiple multiPath <g> tags in one icon
	groups?: Group[];
	fillRule?: 'nonzero' | 'evenodd' | 'inherit';
	polygon?: {
		points: string;
	};
}

export interface Group {
	fill?: string;
	stroke?: string;
	fillRule?: 'nonzero' | 'evenodd' | 'inherit';
	// allows for <path> <circle> and nested <g> tags
	paths: (Path | Circle | Group)[];
	transform?: string;
}

export interface Path {
	path: string;
	fill?: string;
	opacity?: number;
	fillRule?: 'nonzero' | 'evenodd' | 'inherit';
	strokeWidth?: number;
}

export interface Circle {
	cx: number;
	cy: number;
	r: number;
	stroke?: string;
	strokeWidth?: string;
	fill?: string;
}

export interface IconData {
    Moon: ImportConfig;
    Sun: ImportConfig;
}