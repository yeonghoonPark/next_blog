import "@/app/(route)/globals.css";

import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import BackgroundLines from "@/app/components/molecules/BackgroundLines";
import Footer from "@/app/components/organisms/Footer";
import Header from "@/app/components/organisms/Header";
import MainArea from "@/app/components/organisms/MainArea";
import { APP_TITLE } from "@/app/constants/app";
import { ThemeProvider } from "@/app/contexts/ThemeContext";
import Favicon from "@/app/favicon.ico";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_TITLE,
  description:
    "A blog dedicated to JavaScript, TypeScript, and React. Dive deep into frontend development with practical insights and coding examples.",
  icons: [{ rel: "icon", url: Favicon.src }],
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html className={`${OpenSans.className}`} lang="ko">
      <body className="relative flex flex-col flex-1 min-h-screen overflow-x-hidden text-slate-900 dark:text-slate-300">
        <ThemeProvider>
          {/* background lines */}
          <BackgroundLines />
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
