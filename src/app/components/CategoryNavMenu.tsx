"use client";

type Props = {
    categories: string[];
    selected: string;
    onCategoryClick: (category: string) => void;
};

export default function CategoryNavMenu({ categories, selected, onCategoryClick }: Props) {
    const handleClick = (category: string) => {
        onCategoryClick(category);
    };
    return (
        <ul className="flex flex-col items-center sm:justify-between sm:flex-row w-full">
            {categories.map((category, i) => (
                <li
                    className={`${
                        selected === category &&
                        "text-emerald-500 sm:border-b-emerald-500 dark:sm:border-b-emerald-500"
                    } w-full py-3 sm:border-b sm:border-neutral-300 dark:sm:border-gray-700 text-center cursor-pointer`}
                    key={i}
                    onClick={() => handleClick(category)}
                >
                    {category}
                </li>
            ))}
        </ul>
    );
}
