import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopLeftShape from "@/components/icons/shapes/TopLeftShape";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {" "}
                <div className="absolute top-0 left-0">
                    <TopLeftShape />
                </div>
                {children}
            </body>
        </html>
    );
}
