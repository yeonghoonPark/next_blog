import React from "react";

import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "@/contentlayer/generated";
import { notFound } from "next/navigation";

export default function PostDetailPage({ params }: { params: { id: string } }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.id);
    const MDXConponent = useMDXComponent(post?.body.code || "");

    // ##$$ Todo, notFound
    if (!post) notFound();

    const { title, description, category, thumbnail, createdAt } = post;
    return (
        <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{category}</span>
            <time>{createdAt}</time>
            <img src={thumbnail as string} alt={`${title} image`} width={100} height={100} />
            <MDXConponent />
        </section>
    );
}
