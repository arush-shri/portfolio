import Link from "next/link";
import { ReactElement } from "react";

export default function NotFound(): ReactElement {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col min-h-screen items-center pt-28 px-5 lg:px-20">
				<div className="flex flex-col justify-center">
					<div
						className="flex flex-col justify-between bg-[#FFF] px-5 lg:px-10 py-7 mb-14 border-2
                        border-[#0000001F] shadow-lg rounded-xl"
					>
						<span
							className="text-[#064B47] px-3 py-0.5 bg-[#d8f3f1] rounded-full text-sm 
                            justify-center items-center text-clip self-start font-semibold"
						>
							404 - Page not found
						</span>
						<span className="font-bold text-[#0F1724] text-4xl mt-8">
							Looks like you took a wrong turn.
						</span>
						<span className="font-medium text-lg text-[#adbcbf] mt-4">
							The page you're looking for doesn't exist, was
							moved, or might be under contstruction.
						</span>

						<div className="flex flex-col sm:flex-row w-full gap-x-3 pt-4 items-start gap-y-2 sm:items-center">
							<a
								href="/"
								className="font-medium text-md md:text-lg px-4 py-2 bg-[#0EA5A4] text-white rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
							>
								Back to Home
							</a>
							<a
								href="/work?limit=6"
								className="font-medium flex flex-row items-center gap-x-1 text-md md:text-lg px-4 py-2 border-1 border-[#0000001F] text-[#0F1724] rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
							>
								<span>View All Work</span>
							</a>
							<Link
								href="/#contact"
								className="font-medium flex flex-row items-center gap-x-1 text-md md:text-lg px-4 py-2 border-1 border-[#0000001F] text-[#0F1724] rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1"
							>
								<span>Contact Me</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
