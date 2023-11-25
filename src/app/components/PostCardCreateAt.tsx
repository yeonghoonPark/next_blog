import { memo } from "react";

import { format, parseISO } from "date-fns";

type Props = {
    createdAt: string;
};

function PostCardCreateAt({ createdAt }: Props) {
    return (
        <time className="text-xs text-gray-500 dark:text-gray-400">
            {format(parseISO(createdAt), "yyyy. MM. dd")}
        </time>
    );
}

export default memo(PostCardCreateAt);
