import { memo } from 'react';

type Props = {
  title: string;
  count: string | number;
};

function SectionTitle({ title, count }: Props) {
  return (
    <h2 className="flex items-center gap-2 my-4 font-bold text-xl">
      {title}
      <span className="text-rose-500 dark:text-pink-400">{count}</span>
    </h2>
  );
}

export default memo(SectionTitle);
