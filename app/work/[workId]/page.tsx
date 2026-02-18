"use client";

import { useAppContext } from "@/app/_context/AppContext";
import { MediaItem, WorkArrType, WorkObjType } from "@/app/_lib/customTypes";
import WorkDetailRowItem from "@/components/workDetailRowItem";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import { notFound, useParams, useRouter } from "next/navigation";
import { ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function WorkDetails(): ReactElement {
	const projectData: WorkArrType = useAppContext();
	const router: AppRouterInstance = useRouter();
	const params = useParams();
	const workId = params.workId as string;
	const data: WorkObjType | undefined = projectData.find(
		(item) => item.id === workId,
	);

	if (!data) {
		notFound();
	}

	const media: MediaItem[] = [
		...data.images.map((img) => ({ type: "image" as const, src: img })),
		...data.videos.map((vid) => ({ type: "video" as const, src: vid })),
	];

	return (
		<div className="flex flex-col min-h-screen px-5 lg:px-20">
			<section className="flex flex-col pt-[12dvh] md:pt-[16dvh] border-b-1 border-[#0000001F] pb-[5dvh] md:pb-[10dvh]">
				<button
					onClick={(e) => {
						e.preventDefault();
						router.back();
					}}
					className="flex flex-row items-center justify-center text-md px-4 py-2 self-start mb-[3dvh] md:mb-[5dvh] gap-x-[0.5dvw]
                    border-1 border-[#0000001F] text-[#0F1724] rounded-lg cursor-pointer transition-all duration-200 
                    hover:-translate-x-1 font-medium"
				>
					<ArrowLeft className="w-5 text-[#0F1724]" />
					<span>Back to Work</span>
				</button>
				<span className="font-bold text-[#0F1724] text-4xl ">
					{data.name}
				</span>
				<span className="text-[#0F1724] text-lg pt-5 w-full md:w-2/3">
					{data.description}
				</span>

				<a
					href={data.repo}
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-row items-center justify-center text-md px-4 py-2 self-start mb-[2dvh] md:mb-[4dvh] gap-x-[0.6dvw]
                    border-1 border-[#0000001F] text-[#0F1724] rounded-lg cursor-pointer transition-all duration-200 
                    hover:-translate-y-1 font-medium mt-[2dvh] md:mt-[4dvh]"
				>
					<span>Veiw Source</span>
					<Github className="w-5 text-[#0F1724]" />
				</a>

				<Carousel
					showThumbs={false}
					showStatus={false}
					infiniteLoop
					useKeyboardArrows
					dynamicHeight={false}
					renderArrowPrev={(onClickHandler, hasPrev, label) =>
						hasPrev && (
							<button
								type="button"
								onClick={onClickHandler}
								title={label}
								className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white 
                                aspect-square px-3 rounded-full transition-all duration-300 z-10 hover:left-2"
							>
								<ArrowLeft />
							</button>
						)
					}
					renderArrowNext={(onClickHandler, hasNext, label) =>
						hasNext && (
							<button
								type="button"
								onClick={onClickHandler}
								title={label}
								className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white 
                                aspect-square px-3 rounded-full transition-all duration-300 z-10 hover:right-2"
							>
								<ArrowRight />
							</button>
						)
					}
					renderIndicator={(
						onClickHandler,
						isSelected,
						index,
						label,
					) => (
						<button
							key={index}
							type="button"
							onClick={onClickHandler}
							title={label}
							className={`mx-1 h-2 rounded-full transition-all duration-300 ${
								isSelected
									? "w-8 bg-[#0EA5A4]"
									: "w-2 bg-gray-300"
							}`}
						/>
					)}
				>
					{media.map((item, index) => (
						<div key={index}>
							{item.type === "image" ? (
								<Image
									src={item.src}
									alt="Project media"
									width={1200}
									height={800}
									className="rounded-xl object-cover"
								/>
							) : (
								<video
									src={item.src}
									controls
									className="w-full rounded-xl"
								/>
							)}
						</div>
					))}
				</Carousel>
			</section>
			<section className="flex flex-row border-b-1 border-[#0000001F] pb-[2dvh] md:pb-[3dvh] justify-between">
				<WorkDetailRowItem title="ROLE" subTitle={data.role} />
				<WorkDetailRowItem
					title="TIMELINE"
					subTitle={`${data.startAt} - ${data.endAt}`}
				/>
				<WorkDetailRowItem title="CLIENT" subTitle={data.client} />
			</section>
			<section className="flex flex-col pt-[4dvh]">
				<span className="font-bold text-[#0F1724] text-lg ">
					Tech Stack
				</span>
				<span className="font-semibold text-[#98A0AB] text-md pt-1 w-full ">
					{`Tools and technologies I used to design, build, and ship ${data.name}.`}
				</span>
				<div className="flex flex-row pt-4 gap-x-[1dvw]">
					{data.stack.map((item, index) => (
						<span
							className="text-[#064B47] px-[3vw] md:px-[1vw] py-[0.2dvh] bg-[#d8f3f1] rounded-full text-md font-medium"
							key={index}
						>
							{item}
						</span>
					))}
				</div>
			</section>
			<section className="flex flex-col pt-[5dvh] md:pt-[6dvh]">
				<span className="font-bold text-[#0F1724] text-2xl ">
					The Challenge
				</span>
				<span className="font-medium text-[#98A0AB] text-lg pt-2">
					{data.problem}
				</span>
				<span className="font-bold text-[#0F1724] text-2xl pt-[4dvh]">
					The Solution
				</span>
				<span className="font-medium text-[#98A0AB] text-lg pt-2">
					{data.solution}
				</span>
				<span className="font-bold text-[#0F1724] text-2xl pt-[4dvh]">
					Key Features
				</span>
				<ul className="list-disc pl-5 marker:text-[#0EA5A4] space-y-2 pt-2 pb-[5dvh]">
					{data.features.map((feature, idx) => (
						<li
							key={idx}
							className="font-medium text-[#98A0AB] text-lg"
						>
							{feature}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
}
