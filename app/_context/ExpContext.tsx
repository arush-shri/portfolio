"use client";

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { ExpArrType } from "../_lib/customTypes";

const ExpContext = createContext<ExpArrType | undefined>(undefined);

export function ExpProvider({ children }: { children: ReactNode }) {
	const [expData, setExpData] = useState<ExpArrType | undefined>([]);

	const getData = async () => {
		const res = await fetch("/api/experience");
		const json = await res.json();
		setExpData(json.data);
	};

	useEffect(() => {
		getData();
	}, []);

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
