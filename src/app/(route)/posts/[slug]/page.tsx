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

    const MDXComponent = useMDXComponent(post?.body.code || "");

    return (
        <article className="flex flex-col gap-8 max-w-2xl mx-auto">
            <section className="flex flex-col gap-6 py-4">
                <PostContents post={post} type="page" />
            </section>

            <section
                className="                  
                    max-w-2xl 
                    prose 
                    dark:prose-invert 
                    prose-hr:border-gray-300 dark:prose-hr:border-gray-700 
                    prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:border-pink-500 dark:prose-blockquote:border-pink-400
                    prose-p:before:content-none prose-p:after:content-none
                    prose-em:not-italic prose-em:font-semibold prose-em:text-black dark:prose-em:text-white
                    prose-code:text-pink-500 dark:prose-code:text-pink-400
                    prose-a:no-underline prose-a:text-sky-600 dark:prose-a:text-sky-400
                    prose-table:mb-5 prose-table:border-separate prose-table:border-spacing-1 prose-table:text-center 
                    prose-th:p-1.5 prose-th:rounded prose-th:bg-red-200 dark:prose-th:bg-red-900 first:prose-th:bg-gray-300 dark:first:prose-th:bg-gray-600
                    prose-td:p-1.5 prose-td:rounded prose-td:bg-sky-200 dark:prose-td:bg-sky-900 first:prose-td:bg-gray-300 dark:first:prose-td:bg-gray-600
                    prose-h3:text-center
                "
            >
                <MDXComponent />
            </section>
        </article>
    );
}
