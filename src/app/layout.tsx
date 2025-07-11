import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "400", "700"],
	variable: "--font-roboto",
	display: "swap",
	style: "normal",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={roboto.variable}>
			<body className="font-roboto">{children}</body>
		</html>
	);
}
