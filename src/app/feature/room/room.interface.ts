export interface Room {
	slug: string;
	name: string;
	description: string;
	price: string;
	capacity: string;
	extraPerson?: string;
	image: string;
	imageAlt: string;
	amenities: string[];
}
