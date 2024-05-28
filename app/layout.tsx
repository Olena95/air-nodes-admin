import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Air Nodes",
    description: "Air Nodes",
    icons: {
        icon: [
            { url: "/favicon/favicon-32x32.png", type: "image/png" },
            {
                url: "/favicon/favicon-16x16.png",
                type: "image/png",
                sizes: "any",
            },
        ],

        apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "76x76" }],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
