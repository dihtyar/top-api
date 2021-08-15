export enum TopLevelCategory {
	Courses,
	Services,
	Books,
	Products,
}
export class TopPageModel {
	_id: string;
	firstCategory: TopLevelCategory;
	secondCategoty: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		juniorSalary: number;
		middleSalary: number;
		seniorSalary: number;
	};
	advantage: {
		title: string;
		description: string;
	}[];
	seoText: string;
	tagsTitles: string;
	tags: string[];
}
