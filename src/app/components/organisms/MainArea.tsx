import { HiddenNavigation, SideNavigation } from "@/app/components";

type Props = {
  children: React.ReactNode;
};

const MainArea = ({ children }: Props) => {
  return (
    <div className="relative flex flex-1 mx-auto max-w-[90rem]">
      <HiddenNavigation />
      <SideNavigation />
      <main className="flex-1 px-12 py-10 md:pl-28 xl:pl-64 text-slate-700 dark:text-slate-400">
        {children}
      </main>
    </div>
  );
};

export default MainArea;
