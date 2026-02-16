"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { WorkArrType } from "../_lib/customTypes";

const AppContext = createContext<WorkArrType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
	const [projectData, setProjectData] = useState<WorkArrType | undefined>([
		{
			id: "11",
			name: "1",
			description: "Community-based tool sharing web app.",
			startAt: "Jan 2025",
			endAt: "Apr 2025",
			images: ["/images/logo.png"],
			videos: [],
			stack: ["Next.js", "AWS", "Redis", "Stack"],
			repo: "https://github.com/arush-shri/toolshare-platform",
			client: "Personal Project",
			problem: "Tool access inefficiency in communities.",
			solution: "Built scalable full-stack solution.",
			features: ["Search tools", "Upload listings", "Authentication"],
		},
		{
			id: "22",
			name: "Platform",
			description: "Community-based tool sharing web app.",
			startAt: "Jan 2025",
			endAt: "Apr 2025",
			images: ["/images/myPic.png"],
			videos: [],
			stack: ["Next.js", "AWS", "Redis"],
			repo: "https://github.com/arush-shri/toolshare-platform",
			client: "Personal Project",
			problem: "Tool access inefficiency in communities.",
			solution: "Built scalable full-stack solution.",
			features: ["Search tools", "Upload listings", "Authentication"],
		},
		{
			id: "33",
			name: "ToolShare",
			description: "Community-based tool sharing web app.",
			startAt: "Jan 2025",
			endAt: "Apr 2025",
			images: ["/images/logo.png"],
			videos: [],
			stack: ["Next.js", "AWS", "Redis"],
			repo: "https://github.com/arush-shri/toolshare-platform",
			client: "Personal Project",
			problem: "Tool access inefficiency in communities.",
			solution: "Built scalable full-stack solution.",
			features: ["Search tools", "Upload listings", "Authentication"],
		},
	]);

	return (
		<AppContext.Provider value={projectData}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used inside AppProvider");
	}
	return context;
}
