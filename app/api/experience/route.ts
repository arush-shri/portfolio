import { ExpObjType } from "@/app/_lib/customTypes";
import { NextResponse } from "next/server";
import { getCollectionData } from "../get_data";

export async function GET(): Promise<NextResponse> {
	const { data, success, error } =
		await getCollectionData<ExpObjType>("experience");

	if (!data) {
		return NextResponse.json(
			{ error: error?.message ?? "Failed to fetch", data: [] },
			{ status: success },
		);
	}

	return NextResponse.json({ data }, { status: success });
}
