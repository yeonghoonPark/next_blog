import "@/app/(route)/globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/app/components/organisms/Footer";
import Header from "@/app/components/organisms/Header";
import MainArea from "@/app/components/organisms/MainArea";
import { ThemeProvider } from "@/app/contexts/ThemeContext";
import Favicon from "@/app/favicon.ico";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPOTTA-DEV",
  description:
    "A blog dedicated to JavaScript, TypeScript, and React. Dive deep into frontend development with practical insights and coding examples.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body
        className={`${OpenSans.className} relative flex flex-col flex-1 min-h-screen text-slate-900 dark:text-slate-200`}
      >
        <ThemeProvider>
          {/* header */}
          <Header />
          {/* main area that includes navigation and main content */}
          <MainArea>{children}</MainArea>
          {/* footer */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
