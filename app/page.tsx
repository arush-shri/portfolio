import ExperienceList from "@/components/experienceList";
import WorkCard, { ViewWorkButton } from "@/components/workCard";
import { Download, FileText, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col">
			<section className="flex flex-row min-h-screen items-center justify-between px-20">
				<div className="flex w-[50vw] min-h-screen flex-col justify-start pt-[15dvh]">
					<span className="font-bold text-[#0F1724] text-5xl">
						Full-Stack Engineer Building Scalable, High-Performance
						Software.
					</span>
					<span className="text-[#98A0AB] text-xl pt-2">
						Hi, I’m Arush — I architect and develop scalable
						software systems that prioritize performance,
						reliability, and user experience. From frontend
						interfaces to backend infrastructure, I build solutions
						designed to scale.
					</span>

					<div className="flex flex-row gap-x-[1.5vw] pt-[8dvh] items-center">
						<button className="text-lg px-4 py-2 bg-[#0EA5A4] text-white rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1">
							View Work
						</button>
						<button className="flex flex-row items-center gap-x-[0.5vw] text-lg px-4 py-2 border-1 border-[#0000001F] text-[#0F1724] rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1">
							<Download className="w-5 sm:w-6 text-[#0F1724]" />
							<span>Download CV</span>
						</button>
					</div>

					<div className="flex flex-row gap-x-[1vw] pt-[10dvh] items-center">
						<a
							href="https://github.com/arush-shri"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="w-5 sm:w-6 text-[#5a636f] hover:text-[#000000] transition" />
						</a>
						<a
							href="https://www.linkedin.com/in/arush-shri"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="w-5 sm:w-6 text-[#5a636f] hover:text-[#000000] transition" />
						</a>
					</div>
				</div>
				<div className="flex w-[50vw] min-h-screen flex-col justify-center items-end pt-[6dvh]">
					<Image
						className="rounded-4xl w-3/4"
						src="/images/myPic.png"
						alt="Next.js logo"
						width={801}
						height={988}
						priority
					/>
				</div>
			</section>
			<section className="min-h-screen flex flex-col justify-center px-20">
				<div className="flex flex-row w-full justify-between items-center">
					<div className="flex flex-col">
						<span className="font-bold text-[#0F1724] text-4xl">
							Selected Work
						</span>
						<span className="text-[#98A0AB] text-xl mt-[2dvh]">
							A selection of projects I've worked on recently.
						</span>
					</div>
					<ViewWorkButton />
				</div>
				<div className="flex flex-row gap-x-[2vw] w-full mt-[7dvh] justify-between items-center">
					<WorkCard index={0} />
					<WorkCard index={1} />
					<WorkCard index={2} />
				</div>
			</section>
			<section className="min-h-screen flex flex-col justify-center px-20">
				<div className="flex flex-row w-full justify-between items-center">
					<span className="font-bold text-[#0F1724] text-4xl">
						Experience
					</span>
				</div>
				<ExperienceList />
			</section>
			<section className="flex flex-col justify-center px-40">
				<a
					href="/docs/Arush Shrivastava.pdf"
					download
					className="flex flex-row items-center justify-between px-[3dvw] py-4 mb-[5dvh] border-1 border-[#0000001F] 
                    rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
				>
					<div className="flex flex-row item-center gap-x-[2vw]">
						<div className="p-2.5 bg-[#d8f3f1] rounded-full self-center">
							<FileText className="w-5 sm:w-6 text-[#000000]" />
						</div>
						<div className="flex flex-col items-start">
							<span className="font-bold text-lg">
								Download Full Resume
							</span>
							<span className="text-sm font-semibold text-[#98A0AB]">
								PDF, 130KB
							</span>
						</div>
					</div>
					<Download className="w-5 sm:w-6 text-[#000000]" />
				</a>
			</section>
		</div>
	);
}
