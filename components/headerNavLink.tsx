"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

export default function HeaderNavLink({
	title,
	navTo,
	callBack,
}: {
	title: string;
	navTo: string;
	callBack?: () => void;
}): ReactElement {
	const pathname = usePathname();
	const isActive = pathname === navTo;

	return (
		<Link
			key={navTo}
			onClick={callBack}
			href={navTo}
			className={`text-lg transition-all hover:-translate-y-1 duration-200 ease-in-out hover:text-[#0F1724] ${
				isActive ? "text-[#0F1724] font-semibold" : "text-[#98A0AB]"
			}`}
		>
			{title}
		</Link>
	);
}
