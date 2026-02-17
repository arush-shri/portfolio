"use client";

import { useAppContext } from "@/app/_context/AppContext";
import { WorkArrType, WorkObjType } from "@/app/_lib/customTypes";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

export default function WorkCard({ index }: { index: number }): ReactElement {
	const projectData: WorkArrType = useAppContext();
	const data: WorkObjType = projectData[index];
	const router: AppRouterInstance = useRouter();

	const handleClick = () => {
		router.push(`/work/${data.id}`);
	};

	return (
		<div
			onClick={handleClick}
			className="flex flex-col mb-[3dvh] md:mb-0 rounded-xl w-full overflow-hidden bg-white shadow-xs
            border-1 border-[#0000001F] cursor-pointer"
		>
			<Image
				src={data.images[0]}
				key={index}
				alt="Project Image"
				width={512}
				height={512}
				className="w-full h-[34dvh] md:h-[32dvh] object-cover"
			/>
			<div className="px-[2vw] pb-[2vw] flex flex-col">
				<span className="font-semibold text-[#0F1724] text-xl mt-[2dvh]">
					{data.name}
				</span>
				<span className="text-[#98A0AB] text-md mt-[1dvh]">
					{data.description}
				</span>
				<div className="flex flex-row gap-x-[1vw] mt-[2dvh]">
					{data.stack.slice(0, 3).map((item, index) => (
						<span
							className="text-[#064B47] px-[3vw] md:px-[1vw] py-[0.2dvh] bg-[#d8f3f1] rounded-full text-md"
							key={index}
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export function ViewWorkButton(): ReactElement {
	const router: AppRouterInstance = useRouter();

	const handleClick = () => {
		router.push(`/work`);
	};

	return (
		<button
			onClick={handleClick}
			className="text-lg px-4 py-2 self-end border-1 border-[#0000001F] text-[#0F1724] rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
		>
			View All Work
		</button>
	);
}
