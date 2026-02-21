"use client";

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { WorkArrType } from "../_lib/customTypes";

const AppContext = createContext<WorkArrType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
	const [projectData, setProjectData] = useState<WorkArrType | undefined>([]);

	const getData = async () => {
		const res = await fetch("/api/work");
		const json = await res.json();
		setProjectData(json.data);
	};

	useEffect(() => {
		getData();
	}, []);

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
