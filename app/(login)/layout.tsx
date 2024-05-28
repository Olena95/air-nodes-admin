import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import TopLeftShape from "@/components/icons/shapes/TopLeftShape";
import MobTopLeftShape from "@/components/icons/mobileShapes/MobTopLeftShape";
import MobHeaderBottomShape from "@/components/icons/mobileShapes/MobHeaderBottomShape";
import LoginShapeBottom from "@/components/icons/shapes/LoginShapeBottom";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Login",
    description: "Login Air Nodes",
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
                <div className="block md:hidden absolute bottom-0 right-0">
                    <MobHeaderBottomShape />
                </div>
                <div className=" hidden md:block absolute bottom-0 right-0">
                    <LoginShapeBottom />
                </div>
                {children}
            </body>
        </html>
    );
}
