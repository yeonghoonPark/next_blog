import "@/app/(route)/globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ThemeProvider } from "@/app/context/ThemeContext";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next Blog",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body
                className={`${OpenSans.className} flex flex-col select-none text-gray-800 dark:text-gray-100`}
            >
                <ThemeProvider>
                    <Header />
                    <main className="grow w-full max-w-5xl self-center mt-16 p-10">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
