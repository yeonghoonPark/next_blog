import Image from "next/image";

import PostCardCategoryIcon from "@/app/components/PostCardCategoryIcon";
import PostCardCreateAt from "@/app/components/PostCardCreateAt";
import { Post } from "@/contentlayer/generated";

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
            <div className="flex flex-col gap-2 p-4 items-center text-center">
                <PostCardCreateAt createdAt={createdAt} />
                <h2 className="w-full font-bold group-hover:text-emerald-500 truncate">{title}</h2>
                <p className="w-full mb-1 text-sm text-gray-700 dark:text-gray-300 truncate">
                    {description}
                </p>
                <PostCardCategoryIcon category={category} />
            </div>
        </article>
    );
}
