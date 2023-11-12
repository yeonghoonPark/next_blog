import { Post } from "@/contentlayer/generated";
import { format, parseISO } from "date-fns";
import Image from "next/image";

type Props = {
    post: Post;
};

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
                <h2 className="font-bold text-gray-600 dark:text-gray-300 group-hover:text-emerald-500 truncate py-1">
                    {title}
                </h2>
                <p className="text-sm group-hover:text-gray-600 dark:group-hover:text-gray-300 truncate">
                    {description}
                </p>
                <div className="flex justify-between text-xs">
                    <span>{category}</span>
                    <time>{format(parseISO(createdAt), "yyyy. MM. dd")}</time>
                </div>
            </div>
        </article>
    );
}
