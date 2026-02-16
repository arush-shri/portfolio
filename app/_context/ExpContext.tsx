"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { ExpArrType } from "../_lib/customTypes";

const ExpContext = createContext<ExpArrType | undefined>(undefined);

export function ExpProvider({ children }: { children: ReactNode }) {
	const [expData, setExpData] = useState<ExpArrType | undefined>([
		{
			id: "1",
			description:
				"Led full-stack development of scalable web platforms using Next.js and TypeScript.",
			company: "Shink Al Tech Private Limited",
			position: "Full-Stack Engineer",
			startAt: "Jan 2024",
			endAt: "Present",
			features: [
				"Led full-stack development of scalable web platforms using Next.js and TypeScript.",
				"Designed and implemented serverless backend architecture with AWS Lambda and DynamoDB.",
				"Engineered high-performance ranking systems using Redis Z-Sets for real-time data processing.",
				"Improved application performance by optimizing API response times and reducing bundle size.",
				"Collaborated with product and design teams to deliver production-ready features.",
			],
		},
		{
			id: "2",
			description:
				"Integrated AWS Rekognition for secure identity verification workflows.",
			company: "Stealth Startup",
			position: "Mobile & Backend Engineer",
			startAt: "Sep 2023",
			endAt: "Dec 2023",
			features: [
				"Migrated legacy mobile app to React Native Expo, improving maintainability and performance.",
				"Developed custom native modules in Kotlin and Swift to overcome SDK limitations.",
				"Integrated AWS Rekognition for secure identity verification workflows.",
				"Built gamification and reputation systems with scalable backend infrastructure.",
			],
		},
		{
			id: "3",
			description:
				"Designed RESTful APIs and implemented authentication systems.",
			company: "Freelance",
			position: "Full-Stack Developer",
			startAt: "2022",
			endAt: "2023",
			features: [
				"Built and deployed responsive web applications using React and Node.js.",
				"Designed RESTful APIs and implemented authentication systems.",
				"Optimized SEO and performance for client websites.",
				"Managed deployments and CI/CD pipelines for production environments.",
			],
		},
	]);

	return (
		<ExpContext.Provider value={expData}>{children}</ExpContext.Provider>
	);
}

export function useExpContext() {
	const context = useContext(ExpContext);
	if (!context) {
		throw new Error("useAppContext must be used inside AppProvider");
	}
	return context;
}
