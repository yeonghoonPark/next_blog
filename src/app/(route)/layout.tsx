import "@/app/(route)/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
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
        className={`${OpenSans.className} flex select-none flex-col text-gray-800 dark:text-gray-100`}
      >
        <ThemeProvider>
          <Header />
          <main className="mt-16 w-full max-w-5xl grow self-center p-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
