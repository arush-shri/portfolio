"use client";

import { useExpContext } from "@/app/_context/ExpContext";
import { ExpArrType } from "@/app/_lib/customTypes";
import { ReactElement } from "react";

export default function ExperienceList(): ReactElement {
	const data: ExpArrType = useExpContext();

	return (
		<div className="flex flex-col w-full mt-2">
			{data.map((item, index) => (
				<div
					className={`md:grid md:grid-cols-4 gap-x-[2vw] py-2 border-b border-[#0000001F] last:border-b-0`}
					key={index}
				>
					<div>
						<span className="text-[#98A0AB] text-md">{`${item.startAt} — ${item.endAt}`}</span>
					</div>
					<div className="flex flex-col md:col-span-3 mt-[1dvh] md:mt-0">
						<span className="font-semibold text-[#0F1724] text-2xl">
							{item.company}
						</span>
						<span className="font-medium text-[#0F1724] text-lg mt-[1dvh]">
							{item.position}
						</span>
						<span className="font-regular text-[#98A0AB] text-md mt-[1dvh]">
							{item.description}
						</span>
					</div>
				</div>
			))}
		</div>
	);
}
