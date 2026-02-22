import { Copyright, Github, Linkedin, Mail } from "lucide-react";
import { ReactElement } from "react";

export default function Footer(): ReactElement {
	return (
		<div className="px-5 sm:px-12 bg-white w-full justify-between items-center flex flex-row gap-x-1 py-2.5">
			<div className="flex flex-row gap-x-2 items-center">
				<Copyright className="w-5 sm:w-6 text-[#6b7280]" />
				<span className="text-[#6b7280] text-sm sm:text-lg">
					2025 Arush Shrivastava.
				</span>
			</div>
			<div className="flex flex-row gap-x-2 items-center">
				<a
					href="https://github.com/arush-shri"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github className="w-5 sm:w-6 text-[#98A0AB] hover:text-[#000000] transition" />
				</a>
				<a
					href="https://www.linkedin.com/in/arush-shri"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Linkedin className="w-5 sm:w-6 text-[#98A0AB] hover:text-[#000000] transition" />
				</a>
				<a href="mailto:shri.arush03@gmail.com">
					<Mail className="w-5 sm:w-6 text-[#98A0AB] hover:text-[#000000] transition" />
				</a>
			</div>
		</div>
	);
}
