import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Landing Page",
    description: "Assignment of Programming pathshala company",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} font-sans dark:bg-gray-900 dark:text-white min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
