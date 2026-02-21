export type WorkObjType = {
	id: string;
	name: string;
	description: string;
	startAt: string;
	endAt: string;
	images: string[];
	videos: string[];
	stack: string[];
	repo: string;
	client: string;
	problem: string;
	solution: string;
	role: string;
	features: string[];
};

export type WorkArrType = WorkObjType[];

export type ExpObjType = {
	id: string;
	company: string;
	description: string;
	position: string;
	startAt: string;
	endAt: string;
};

export type ExpArrType = ExpObjType[];

export type MediaItem = {
	type: "image" | "video";
	src: string;
};
