import { memo } from "react";

type Props = {
    title: string;
    count: string | number;
};

function SectionTitle({ title, count }: Props) {
    return (
        <h2 className="text-xl font-semibold my-4">
            {title}&nbsp;
            <span className="text-emerald-500">&nbsp;{`${count}`}</span>
        </h2>
    );
}

export default memo(SectionTitle);
