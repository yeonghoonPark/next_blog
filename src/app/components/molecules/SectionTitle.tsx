type Props = {
  title: string;
  count: string | number;
};

const SectionTitle = ({ title, count }: Props) => {
  return (
    <h2 className="my-4 flex items-center gap-2 text-xl font-bold">
      {title}
      {count !== undefined && <span className="text-rose-500 dark:text-pink-400">{count}</span>}
    </h2>
  );
};

export default SectionTitle;
