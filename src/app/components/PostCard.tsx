import { Post } from "@/contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";

type Props = {
    post: Post;
};

const CATEGORY_JAVASCRIPT = "JavaScript";
const CATEGORY_TYPESCRIPT = "TypeScript";
const CATEGORY_NEXTJS = "NEXT.js";
const CATEGORY_REACTJS = "React.js";

export default function PostCard({ post }: Props) {
    const { title, description, category, thumbnail, createdAt } = post;
    return (
        <article className="flex flex-col">
            <div className="overflow-hidden">
                <Image
                    className="grayscale-[33%] group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
                    width={640}
                    height={426}
                    src={thumbnail as string}
                    alt={`${title}'s image`}
                    priority
                />
            </div>
            <div className="flex flex-col gap-1 p-2 text-gray-500 dark:text-gray-400">
                <h2 className="py-1 font-bold text-gray-600 dark:text-gray-300 group-hover:text-emerald-500 truncate">
                    {title}
                </h2>
                <p className="text-sm group-hover:text-gray-600 dark:group-hover:text-gray-300 truncate">
                    {description}
                </p>
                <div className="flex justify-between items-end text-xs pt-1.5 pb-0.5">
                    <time>{format(parseISO(createdAt), "yyyy. MM. dd")}</time>
                    <span
                        className={`
                            py-1 px-2 mx-1 rounded-xl border-[0.5px]
                        ${
                            category === CATEGORY_JAVASCRIPT &&
                            "bg-yellow-300 border-yellow-400 text-black"
                        }
                        ${
                            category === CATEGORY_TYPESCRIPT &&
                            "bg-blue-500 border-blue-600 text-white"
                        }
                        ${
                            category === CATEGORY_NEXTJS &&
                            "bg-neutral-50 border-gray-400 text-gray-900"
                        }
                        ${
                            category === CATEGORY_REACTJS &&
                            "bg-gray-700 border-gray-800 text-sky-300"
                        }
                    `}
                    >
                        {category}
                    </span>
                </div>
            </div>
        </article>
    );
}
