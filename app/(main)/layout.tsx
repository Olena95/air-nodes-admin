import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import TopLeftShape from "@/components/icons/shapes/TopLeftShape";

import Footer from "@/components/Footer";
import { PopupProvider } from "@/components/Popups/PopupProvider";
import Popups from "@/components/Popups";
import MobTopLeftShape from "@/components/icons/mobileShapes/MobTopLeftShape";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Air Nodes",
    description: "Admin Air Nodes",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="hidden md:block absolute top-0 left-0">
                    <TopLeftShape />
                </div>
                <div className="block md:hidden absolute top-0 left-0">
                    <MobTopLeftShape />
                </div>
                <PopupProvider>
                    {children}
                    <Footer />
                    <Popups />
                </PopupProvider>
            </body>
        </html>
    );
}
