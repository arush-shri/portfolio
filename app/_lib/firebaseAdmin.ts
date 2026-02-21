import { App, cert, getApps, initializeApp } from "firebase-admin/app";

const firebaseConfig = {
	apiKey: "AIzaSyCuNBuSa5Q2Fz_Gp6-bJMTVIC3XeWNpfyw",
	authDomain: "portfolio-arush.firebaseapp.com",
	databaseURL:
		"https://portfolio-arush-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "portfolio-arush",
	storageBucket: "portfolio-arush.firebasestorage.app",
	messagingSenderId: "179526405783",
	appId: "1:179526405783:web:c5e1598bf763adc6d3e3d2",
	measurementId: "G-JRF3H6M92F",
};

// Initialize Firebase
export const firebaseApp: App =
	getApps().length === 0
		? initializeApp({
				credential: cert({
					projectId: process.env.FIREBASE_PROJECT_ID,
					clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
					privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(
						/\\n/g,
						"\n",
					),
				}),
			})
		: getApps()[0];
