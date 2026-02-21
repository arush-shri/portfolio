import { firebaseApp } from "@/app/_lib/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";
import "server-only";

const monthMap: Record<string, number> = {
	Jan: 0,
	Feb: 1,
	Mar: 2,
	Apr: 3,
	May: 4,
	Jun: 5,
	Jul: 6,
	Aug: 7,
	Sep: 8,
	Oct: 9,
	Nov: 10,
	Dec: 11,
};

const parseStartAt = (value: string): number => {
	const [month, year] = value.split(" ");
	return Number(year) * 100 + monthMap[month];
};

export async function getCollectionData<
	T extends { id: string; startAt: string },
>(
	collectName: string,
): Promise<{
	data: T[] | null;
	success: number;
	error: Error | null;
}> {
	try {
		const db = getFirestore(firebaseApp);
		const snapshot = await db.collection(collectName).get();

		const data = snapshot.docs.map((doc) => ({
			id: doc.id,
			...(doc.data() as Omit<T, "id">),
		})) as T[];

		const sorted = [...data].sort(
			(a, b) => parseStartAt(b.startAt) - parseStartAt(a.startAt),
		);

		return { data: sorted, success: 200, error: null };
	} catch (err) {
		const error = err instanceof Error ? err : new Error("Unknown error");

		console.error(error);

		return { data: null, success: 500, error };
	}
}
