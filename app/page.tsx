import ExperienceList from "@/components/experienceList";
import SkillsGroup from "@/components/skillsGroup";
import WorkCard, { ViewWorkButton } from "@/components/workCard";
import {
	Calendar,
	Download,
	FileText,
	Github,
	Linkedin,
	Mail,
} from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

export default function Home(): ReactElement {
	return (
		<div className="flex flex-col">
			<section className="flex flex-col md:flex-row min-h-screen items-center justify-between px-5 lg:px-20">
				<div className="flex w-full md:w-1/2 md:min-h-screen flex-col justify-start pt-[8dvh] md:pt-[15dvh] order-2 md:order-1">
					<span className="font-bold text-[#0F1724] text-4xl md:text-5xl">
						Full-Stack Engineer Building Scalable, High-Performance
						Software.
					</span>
					<span className="text-[#98A0AB] text-xl md:text-xl pt-4 md:pt-3">
						Hi, I’m Arush. I architect and build scalable web and
						mobile applications — from backend infrastructure and
						APIs to intuitive user interfaces — prioritizing
						performance, reliability, and long-term maintainability.
					</span>

					<div className="flex flex-row w-full gap-x-[1.5vw] pt-[5dvh] md:pt-[8dvh] items-center">
						<a
							href="/work?limit=6"
							className="font-medium text-md md:text-lg px-4 py-2 bg-[#0EA5A4] text-white rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
						>
							View Work
						</a>
						<a
							href="/docs/Arush Shrivastava.pdf"
							download
							className="font-medium flex flex-row items-center gap-x-[0.5vw] text-md md:text-lg px-4 py-2 border-1 border-[#0000001F] text-[#0F1724] rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
						>
							<Download className="w-5 sm:w-6 text-[#0F1724]" />
							<span>Download CV</span>
						</a>
					</div>

					<div className="flex flex-row gap-x-[1vw] pt-[7dvh] md:pt-[10dvh] items-center">
						<a
							href="https://github.com/arush-shri"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github className="md:w-6 text-[#5a636f] hover:text-[#000000] transition" />
						</a>
						<a
							href="https://www.linkedin.com/in/arush-shri"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="md:w-6 text-[#5a636f] hover:text-[#000000] transition" />
						</a>
					</div>
				</div>
				<div
					className="flex w-full md:w-1/2 md:min-h-screen flex-col justify-center items-center 
                md:items-end pt-[15dvh] order-1 md:order-2"
				>
					<Image
						className="rounded-full md:rounded-4xl w-3/4 aspect-square md:aspect-auto object-cover md:h-auto"
						src="/images/myPic.png"
						alt="My pic"
						width={801}
						height={988}
						priority
					/>
				</div>
			</section>
			<section className="md:min-h-screen flex flex-col justify-center px-5 lg:px-20 mt-[8dvh] md:mt-0">
				<div className="flex flex-row w-full justify-between items-center">
					<div className="flex flex-col">
						<span className="font-bold text-[#0F1724] text-2xl md:text-4xl">
							Selected Work
						</span>
						<span className="text-[#98A0AB] text-md md:text-xl mt-[2dvh] ">
							A selection of projects I've worked on recently.
						</span>
					</div>
					<ViewWorkButton />
				</div>
				<div className="flex flex-col md:flex-row gap-x-[2vw] w-full mt-[7dvh] justify-between items-center">
					<WorkCard index={0} />
					<WorkCard index={1} />
					<WorkCard index={2} />
				</div>
			</section>
			<section className="min-h-screen flex flex-col justify-center px-5 lg:px-20">
				<div className="flex flex-row w-full justify-between items-center">
					<span className="font-bold text-[#0F1724] text-2xl md:text-4xl">
						Experience
					</span>
				</div>
				<ExperienceList />
			</section>
			<section className="flex flex-col md:flex-row min-h-screen justify-between px-5 lg:px-20">
				<div className="flex w-full md:w-2/5 md:min-h-screen flex-col justify-start">
					<span className="font-bold text-[#0F1724] text-2xl md:text-4xl">
						Technical Skills
					</span>
					<span className="text-[#98A0AB] text-lg pt-4">
						Modern web stack across frontend, backend, and
						infrastructure with a strong focus on product quality
						and reliability.
					</span>
				</div>
				<div className="flex flex-col w-full md:w-3/5 justify-start md:min-h-screen md:pl-8 flex-col pb-[8dvh] pt-[2dvh] md:pt-0">
					<SkillsGroup
						title="Frontend"
						subText="Interfaces, interactions & performance"
						skills={[
							"React",
							"Next.js",
							"TypeScript",
							"JavaScript (ES6+)",
							"Tailwind CSS",
							"Responsive Design",
							"Accessibility",
							"Performance Optimization",
							"State Management",
							"Component Architecture",
						]}
						extra=""
					/>
					<SkillsGroup
						title="Backend"
						subText="API design, authentication, and scalable server architecture."
						skills={[
							"Node.js",
							"Express.js",
							"RESTful API Design",
							"GraphQL",
							"Authentication & Authorization",
							"JWT & OAuth",
							"Serverless Architecture",
							"Microservices",
							"Input Validation",
							"API Security Best Practices",
						]}
						extra="pt-[3dvh]"
					/>
					<SkillsGroup
						title="Data & Persistence"
						subText="Schema design, performance tuning & data integrity."
						skills={[
							"PostgreSQL",
							"MongoDB",
							"Redis",
							"Database Schema Design",
							"Indexing & Query Optimization",
							"Data Modeling",
							"Caching Strategies",
						]}
						extra="pt-[3dvh]"
					/>
					<SkillsGroup
						title="Infrastructure"
						subText="Cloud architecture, automation & observability."
						skills={[
							"AWS",
							"Docker",
							"CI/CD Pipelines",
							"GitHub Actions",
							"Cloud Deployment",
							"Environment Configuration",
							"Monitoring & Logging",
						]}
						extra="pt-[3dvh]"
					/>
					<SkillsGroup
						title="Mobile"
						subText="High-performance native & cross-platform experiences."
						skills={[
							"React Native",
							"Expo",
							"Cross-Platform Development",
							"Native Modules (Kotlin/Swift)",
							"Mobile Performance Optimization",
						]}
						extra="pt-[3dvh]"
					/>

					<SkillsGroup
						title="Tools & Workflow"
						subText="Version control, CI/CD & development workflow."
						skills={[
							"Git & GitHub",
							"Figma",
							"Postman",
							"VS Code",
							"Linux",
						]}
						extra="pt-[3dvh]"
					/>
				</div>
			</section>
			<section
				id="resume"
				className="flex flex-col justify-center px-5 lg:px-40"
			>
				<a
					href="/docs/Arush Shrivastava.pdf"
					download
					className="flex flex-row items-center justify-between px-[3dvw] py-4 mb-[8dvh] border-1 border-[#0000001F] 
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
			<section
				id="contact"
				className="flex flex-col justify-center px-5 lg:px-40"
			>
				<a
					href="/docs/Arush Shrivastava.pdf"
					download
					className="flex flex-col justify-between bg-[#0f1724] px-[3dvw] py-7 mb-[8dvh] border-3
                    border-[#0e9e9d] shadow-lg rounded-xl cursor-pointer"
				>
					<span className="font-semibold text-lg text-[#adbcbf]">
						LET'S COLLABORATE
					</span>
					<span className="text-2xl font-bold text-[#fff] mt-[1dvh]">
						Ready to build something exceptional?
					</span>
					<span className="font-semibold text-lg text-[#adbcbf] mt-[1dvh]">
						Open to impactful engineering roles and high-leverage
						freelance work.
					</span>
					<div className="w-full flex flex-row justify-between sm:justify-start gap-x-[1.5vw] mt-[4dvh] items-center">
						<button
							className="flex flex-row gap-x-[1dvw] px-[2dvw] py-3 bg-[#0EA5A4] items-center
                            rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
						>
							<Mail className="w-5 text-white" />
							<span className="text-lg text-white">Email Me</span>
						</button>
						<button
							className="flex flex-row gap-x-[1dvw] px-[2dvw] py-3 items-center border-1 border-white
                            rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
						>
							<Linkedin className="w-5 text-white" />
							<span className="text-lg text-white">LinkedIn</span>
						</button>
						<button
							className="flex flex-row gap-x-[1dvw] px-[2dvw] py-3 items-center border-1 border-[#0EA5A4]
                            rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
						>
							<Calendar className="w-5 text-[#0EA5A4]" />
							<span className="text-lg text-[#0EA5A4]">
								Calendly
							</span>
						</button>
					</div>
				</a>
			</section>
		</div>
	);
}
