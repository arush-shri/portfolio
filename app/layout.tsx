import Header from "@/components/header";
import { fontInter } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Arush Shrivastava",
	description: "A complete porfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${fontInter.className}`}>
				<Header />
				{children}
				{children}
			</body>
		</html>
	);
}
