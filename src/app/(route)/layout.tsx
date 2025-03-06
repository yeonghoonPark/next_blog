import "@/app/(route)/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/app/components/organisms/Footer";
import Header from "@/app/components/organisms/Header";
import HiddenNavigation from "@/app/components/organisms/HiddenNavigation";
import SideNavigation from "@/app/components/organisms/SideNavigation";
import { ThemeProvider } from "@/app/contexts/ThemeContext";
import Favicon from "@/app/favicon.ico";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPOTTA-DEV",
  description:
    "A blog dedicated to JavaScript, TypeScript, and React. Dive deep into frontend development with practical insights and coding examples.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body
        className={`${OpenSans.className} relative flex flex-col flex-1 min-h-screen text-slate-900 dark:text-slate-200`}
      >
        <ThemeProvider>
          <Header />
          <div className="relative flex flex-1 mx-auto max-w-[90rem]">
            <HiddenNavigation />
            <SideNavigation />
            <main className="flex-1 px-12 py-10 md:pl-28 xl:pl-64 text-slate-700 dark:text-slate-400">
              {children}
            </main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
