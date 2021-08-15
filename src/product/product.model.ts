export class ProductModel {
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	credit: number;
	calculateRating: number;
	description: string;
	disAdvantages: string;
	categories: string[];
	tags: string[];
	characteristics: {
		[key: string]: string;
	}
}