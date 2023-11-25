import { memo } from "react";

function CategoryTitle({ title }: { title: string }) {
    return <h2 className="w-fit text-xl font-semibold py-3 mb-3 sm:mb-0">{title}</h2>;
}

export default memo(CategoryTitle);
