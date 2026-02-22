"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactElement, RefObject, useEffect, useRef, useState } from "react";
import HeaderNavLink from "./headerNavLink";

export default function Header(): ReactElement {
	const [show, setShow] = useState(true);
	const lastScrollY: RefObject<number> = useRef<number>(0);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleResume: () => void = (): void => {};
	const handleContact: () => void = (): void => {};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY.current) {
				// scrolling down
				setShow(false);
			} else {
				// scrolling up
				setShow(true);
			}

			lastScrollY.current = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
				show ? "translate-y-0" : "-translate-y-full"
			}`}
		>
			<div className="flex justify-between px-10 md:px-20 py-3 items-center bg-white shadow-xs">
				<Link
					href="/"
					className="flex flex-row gap-x-2 cursor-pointer items-center h-10"
				>
					<Image
						src="/images/logo.png"
						alt="My logo"
						width={512}
						height={512}
						className="h-full w-auto object-contain"
					/>
					<span className="text-[#0F1724] font-bold text-xl sm:text-2xl">
						ARUSH
					</span>
				</Link>
				<div className="hidden md:flex flex-row gap-x-5 items-center">
					<HeaderNavLink title={"Work"} navTo={"/work?limit=6"} />
					<Link
						href="/#resume"
						className="text-lg cursor-pointer transition-all hover:-translate-y-1 duration-200 ease-in-out 
                        hover:text-[#0F1724] text-[#98A0AB]"
					>
						Resume
					</Link>
					<Link
						href="/#contact"
						className="px-4 py-2 bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0F1724] transition-all duration-200 hover:-translate-y-1"
					>
						Let's Talk
					</Link>
				</div>
				<button
					onClick={() => setMobileOpen(!mobileOpen)}
					className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group"
				>
					<span
						className={`absolute h-0.5 w-6 bg-[#0F1724] transition-all duration-300 ${
							mobileOpen ? "rotate-45" : "-translate-y-2"
						}`}
					/>
					<span
						className={`absolute h-0.5 w-6 bg-[#0F1724] transition-all duration-300 ${
							mobileOpen ? "opacity-0" : "opacity-100"
						}`}
					/>
					<span
						className={`absolute h-0.5 w-6 bg-[#0F1724] transition-all duration-300 ${
							mobileOpen ? "-rotate-45" : "translate-y-2"
						}`}
					/>
				</button>
			</div>
			{mobileOpen && (
				<div className="md:hidden pt-6 justify-self-end flex flex-col gap-4 px-6 bg-white shadow-xs h-[100vh] w-2/3 sm:w-1/2">
					<HeaderNavLink
						title={"Work"}
						navTo={"/work?limit=6"}
						callBack={() => setMobileOpen(!mobileOpen)}
					/>
					<Link
						href="/#resume"
						onClick={() => setMobileOpen(!mobileOpen)}
						className="text-lg transition-all duration-200 ease-in-out hover:text-[#0F1724] text-[#98A0AB] cursor-pointer"
					>
						Resume
					</Link>
					<button
						onClick={handleContact}
						className="text-lg px-4 py-2 bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0F1724] transition-all duration-200 hover:-translate-y-1"
					>
						Let's Talk
					</button>
				</div>
			)}
		</div>
	);
}
