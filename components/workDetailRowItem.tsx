import { ReactElement } from "react";

export default function WorkDetailRowItem({
	title,
	subTitle,
}: {
	title: string;
	subTitle: string;
}): ReactElement {
	return (
		<div className="flex flex-col">
			<span className="font-semibold text-[#98A0AB] text-sm pt-6 md:pt-5 w-full md:w-2/3">
				{title}
			</span>
			<span className="font-medium text-[#0F1724] text-md ">
				{subTitle}
			</span>
		</div>
	);
}
