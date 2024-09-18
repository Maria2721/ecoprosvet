import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	weight: ["500", "600"],
	variable: "--font-inter",
	display: "swap",
});
const gropled = localFont({
	src: "./fonts/Gropled-Bold.woff2",
	variable: "--font-gropled",
	display: "swap",
});

export const metadata = {
	title: "Next App",
	description: "Next.js starter app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${gropled.variable}`}>
				<div className="container">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
