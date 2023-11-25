import React from "react";

import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

import PostCardCategoryIcon from "@/app/components/PostCardCategoryIcon";
import PostCardCreateAt from "@/app/components/PostCardCreateAt";
import { allPosts } from "@/contentlayer/generated";

export function generateStaticParams() {
    return allPosts.map(({ _raw }) => ({ slug: _raw.flattenedPath }));
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
    const post = allPosts.find(({ _raw }) => _raw.flattenedPath === params.slug);

    if (!post) notFound();

    const MDXConponent = useMDXComponent(post?.body.code || "");

    const { title, description, category, thumbnail, createdAt } = post;
    return (
        <section className="flex flex-col gap-12">
            <section className="flex flex-col items-center gap-6 pt-4 pb-12 border-b border-neutral-300 dark:border-gray-700">
                <PostCardCreateAt createdAt={createdAt} />
                <h2 className="font-bold text-3xl">{title}</h2>
                <p className="font-semibold text-xl">{description}</p>
                <PostCardCategoryIcon category={category} />
            </section>

            <section className="">
                <MDXConponent />
            </section>
        </section>
    );
}
