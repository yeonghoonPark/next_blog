import React from 'react';

import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';

import PostContents from '@/app/components/PostContents';
import { allPosts } from '@/contentlayer/generated';

export function generateStaticParams() {
  return allPosts.map(({ _raw }) => ({ slug: _raw.flattenedPath }));
}

export default function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = allPosts.find(({ _raw }) => _raw.flattenedPath === params.slug);

  if (!post) notFound();

  const MDXComponent = useMDXComponent(post?.body.code || "");

  return (
    <article>
      <div
        className="
                    max-w-2xl
                    mx-auto
                    prose
                    break-words
                    text-[#112827] dark:text-[#fff]
                    dark:prose-invert 
                    prose-hr:border-gray-300 dark:prose-hr:border-gray-700 
                    prose-blockquote:py-0.5 prose-blockquote:px-4 prose-blockquote:bg-gray-200 dark:prose-blockquote:bg-slate-900 prose-blockquote:rounded-r prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:border-rose-500 dark:prose-blockquote:border-pink-400
                    prose-p:before:content-none prose-p:after:content-none 
                    prose-em:text-[#112827] dark:prose-em:text-[#fff] prose-em:not-italic prose-em:font-semibold
                    prose-code:text-rose-500 dark:prose-code:text-pink-400 prose-code:before:content-none prose-code:after:content-none
                    prose-a:no-underline prose-a:text-sky-600 dark:prose-a:text-sky-400
                    prose-table:mb-5 prose-table:border-separate prose-table:border-spacing-1 prose-table:text-center 
                    prose-th:p-1.5 prose-th:rounded prose-th:bg-gray-300 dark:prose-th:bg-slate-700
                    prose-td:p-1.5 prose-td:rounded prose-td:bg-gray-200 dark:prose-td:bg-slate-600
                    prose-h2:mt-[-100px] prose-h2:pt-[100px]
                    prose-h3:text-base
                    prose-ul:pl-5
                    prose-ol:pl-5
                    prose-li:marker:text-[#112827] dark:prose-li:marker:text-[#fff] 
                "
      >
        <section className="py-4">
          <PostContents post={post} type="page" />
        </section>
        <section>
          <MDXComponent />
        </section>
      </div>
    </article>
  );
}
