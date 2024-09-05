declare module '*.svg' {
	const content: any;
	export default content;
}

declare module '*.png' {
	const value: any;
	export = value;
}

type Recipe = {
	id: number;
	image: string;
	name: string;
	cookTimeMinutes: string;
	difficulty: string;
	cuisine: string;
	tags: Array<string>;
};
