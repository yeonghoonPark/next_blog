import React from "react";

import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

import PostContents from "@/app/components/PostContents";
import { allPosts } from "@/contentlayer/generated";

export function generateStaticParams() {
    return allPosts.map(({ _raw }) => ({ slug: _raw.flattenedPath }));
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
    const post = allPosts.find(({ _raw }) => _raw.flattenedPath === params.slug);

    if (!post) notFound();

    const MDXConponent = useMDXComponent(post?.body.code || "");

    return (
        <article className="flex flex-col gap-8 max-w-2xl mx-auto">
            <section className="flex flex-col gap-6 py-4">
                <PostContents post={post} type="page" />
            </section>

            <section className="max-w-2xl prose dark:prose-invert prose-blockquote:not-italic prose-em:not-italic prose-em:font-semibold prose-em:text-pink-500">
                <MDXConponent />
            </section>
        </article>
    );
}
