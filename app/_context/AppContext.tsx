"use client";

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { WorkArrType } from "../_lib/customTypes";

const AppContext = createContext<{
	projectData: WorkArrType;
	isLoading: boolean;
}>({ projectData: [], isLoading: false });

export function AppProvider({ children }: { children: ReactNode }) {
	const [projectData, setProjectData] = useState<WorkArrType>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async () => {
		const res = await fetch("/api/work");
		const json = await res.json();
		setProjectData(json.data);
		setIsLoading(false);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<AppContext.Provider value={{ projectData, isLoading }}>
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
