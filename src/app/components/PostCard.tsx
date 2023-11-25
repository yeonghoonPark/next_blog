import Image from "next/image";

import PostContents from "@/app/components/PostContents";
import { Post } from "@/contentlayer/generated";

type Props = {
    post: Post;
};

export default function PostCard({ post }: Props) {
    const { title, thumbnail } = post;
    return (
        <article className="flex flex-col">
            <section className="overflow-hidden">
                <Image
                    className="grayscale-[33%] group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
                    width={640}
                    height={426}
                    src={thumbnail as string}
                    alt={`${title}'s image`}
                    priority
                />
            </section>

            <section className="flex flex-col gap-2 p-4">
                <PostContents post={post} type="card" />
            </section>
        </article>
    );
}
