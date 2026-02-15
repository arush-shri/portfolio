import { ReactElement } from "react";

export default async function WorkDetails({
	params,
}: {
	params: Promise<{ workId: string }>;
}): Promise<ReactElement> {
	const workId: string = (await params).workId;

	return <h1>{workId}</h1>;
}
