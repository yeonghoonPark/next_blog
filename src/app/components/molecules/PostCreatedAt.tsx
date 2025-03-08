import { memo } from "react";
import { format, parseISO } from "date-fns";

type Props = {
  createdAt: string;
};

const PostCreatedAt = ({ createdAt }: Props) => {
  return (
    <time className="text-gray-500 dark:text-gray-400 text-xs">
      {format(parseISO(createdAt), "yyyy. MM. dd")}
    </time>
  );
};

export default memo(PostCreatedAt);
