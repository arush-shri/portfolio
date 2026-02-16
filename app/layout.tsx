import Footer from "@/components/footer";
import Header from "@/components/header";
import { fontInter } from "@/lib/fonts";
import type { Metadata } from "next";
import { AppProvider } from "./_context/AppContext";
import { ExpProvider } from "./_context/ExpContext";
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
			<body className={`${fontInter.className} bg-grey-dark`}>
				<AppProvider>
					<ExpProvider>
						<Header />
						{children}
						<Footer />
					</ExpProvider>
				</AppProvider>
			</body>
		</html>
	);
}
