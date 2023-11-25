import { memo } from "react";

function CategoryTitle({ title }: { title: string }) {
    return <h2 className="text-3xl font-bold py-4 mb-0">{title}</h2>;
}

export default memo(CategoryTitle);
