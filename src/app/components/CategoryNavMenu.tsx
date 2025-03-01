"use client";

import { Category } from "@/app/models/posts";

type Props = {
  categories: Category[];
  currentCategory: Category;
  onClick: (category: Category) => void;
};

const CategoryNavMenu = ({ categories, currentCategory, onClick }: Props) => {
  const handleClick = (category: Category) => () => {
    if (onClick) onClick(category);
  };

  return (
    <ul className="flex w-full flex-col items-center sm:flex-row sm:justify-between">
      {categories.map((category) => (
        <li
          className={`${
            currentCategory === category
              ? "text-rose-500 dark:text-pink-400 sm:border-b-rose-500 dark:sm:border-b-pink-400"
              : ""
          } w-full cursor-pointer py-1 text-center text-sm font-semibold sm:border-b sm:border-neutral-300 sm:py-3 sm:text-base dark:sm:border-gray-700`}
          key={category}
          onClick={handleClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

export default CategoryNavMenu;
