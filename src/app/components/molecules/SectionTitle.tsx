import { memo } from "react";

type Props = {
  title: string;
  count: string | number;
};

const SectionTitle = ({ title, count }: Props) => {
  return (
    <h2 className="flex items-center gap-2 my-4 font-bold text-slate-900 dark:text-slate-200 text-xl">
      {title}
      {count !== undefined && <span className="text-blue-600 dark:text-yellow-500">{count}</span>}
    </h2>
  );
};

export default memo(SectionTitle);
