export type ThemeType = 'dark' | 'light';

export interface BlogPostInterface {
	blogId: string;
	blogTitle: string;
	blogIntro: string;
    blogImage: string;
    blogTags: string[];
    blogDate: Date;
}
