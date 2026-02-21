"use client";

import WorkCard from "@/components/workCard";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactElement, useState } from "react";
import { useAppContext } from "../_context/AppContext";
import { WorkArrType } from "../_lib/customTypes";

export default function Work(): ReactElement {
	const searchParams = useSearchParams();
	const router = useRouter();
	const projectData: WorkArrType = useAppContext();
	const initialLimit: number = Number(searchParams.get("limit")) || 6;
	const [maxLimit, setMaxLimit] = useState<number>(initialLimit);
	const dataLen: number = projectData.length;

	const loadMore = () => {
		const newLimit = maxLimit + 6;
		setMaxLimit(newLimit);
		router.replace(`?limit=${newLimit}`, { scroll: false });
	};

	return (
		<div className="flex flex-col px-5 lg:px-20">
			<section className="flex flex-col pt-26 md:pt-32 border-b-1 border-[#0000001F] pb-[5dvh]">
				<span className="font-bold text-[#0F1724] text-4xl ">
					All Projects
				</span>
				<span className="text-[#98A0AB] text-xl pt-6 md:pt-5 w-full md:w-2/3">
					A selection of high-performance web and mobile applications,
					engineered with scalability, reliability, and user
					experience in mind.
				</span>
			</section>
			<section className="flex flex-col md:grid md:grid-cols-3 gap-4 pt-[2dvh] md:pt-[5dvh] mb-[8dvh] items-start">
				{Array.from(
					{ length: Math.min(maxLimit, dataLen) },
					(_, idx) => (
						<WorkCard key={idx} index={idx} />
					),
				)}
			</section>
			{dataLen > maxLimit && (
				<button
					onClick={loadMore}
					className="flex flex-row items-center text-lg px-4 py-2 self-center md:mb-[5dvh]
                    border-1 border-[#0000001F] text-[#0F1724] rounded-lg cursor-pointer transition-all duration-200 
                    hover:-translate-y-1 font-medium"
				>
					<span>Load More Projects</span>
				</button>
			)}
		</div>
	);
}
