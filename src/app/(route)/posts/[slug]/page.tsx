import React from "react";
import { allPosts } from "@/contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return allPosts.map(({ _raw }) => ({ slug: _raw.flattenedPath }));
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
    const post = allPosts.find(({ _raw }) => _raw.flattenedPath === params.slug);

    if (!post) notFound();

    const MDXConponent = useMDXComponent(post?.body.code || "");

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
