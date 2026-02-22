import WorkClient from "./workClient";

export default async function Work({
	searchParams,
}: {
	searchParams: Promise<{ limit?: string }>;
}) {
	const params = await searchParams;

	return <WorkClient limit={Number(params?.limit) || 6} />;
}
