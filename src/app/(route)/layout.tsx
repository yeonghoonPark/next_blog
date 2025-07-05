import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import "@/app/(route)/globals.css";
import { BackgroundLines, Footer, Header, MainArea } from "@/app/components";
import { APP_TITLE } from "@/app/constants";
import { ThemeProvider } from "@/app/contexts";
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
