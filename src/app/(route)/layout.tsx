import "@/app/(route)/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/app/components/organisms/Footer";
import Header from "@/app/components/organisms/Header";
import SideNavigation from "@/app/components/organisms/SideNavigation";
import { ThemeProvider } from "@/app/contexts/ThemeContext";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "0hun-dev",
  description:
    "A blog dedicated to JavaScript, TypeScript, and React. Dive deep into frontend development with practical insights and coding examples.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body
        className={`${OpenSans.className} flex min-h-screen flex-1 select-none flex-col text-gray-800 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Header />
          <div className="relative flex flex-1">
            <SideNavigation />
            <main className="mx-auto mt-16 max-w-5xl flex-1 p-10">{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
