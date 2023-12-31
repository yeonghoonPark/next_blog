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
                        "text-rose-500 dark:text-pink-400 sm:border-b-rose-500 dark:sm:border-b-pink-400"
                    } w-full py-1 font-semibold text-center text-sm sm:py-3 sm:border-b sm:border-neutral-300 dark:sm:border-gray-700 sm:text-base  cursor-pointer`}
                    key={i}
                    onClick={() => handleClick(category)}
                >
                    {category}
                </li>
            ))}
        </ul>
    );
}
