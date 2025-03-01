import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import PostContents from "@/app/components/PostContents";
import { allPosts } from "@/contentlayer/generated";

export const generateStaticParams = () => {
  return allPosts.map(({ _raw }) => ({ slug: _raw.flattenedPath }));
};

const PostDetailPage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(({ _raw }) => _raw.flattenedPath === params.slug);

  if (!post) notFound();

  const MDXComponent = useMDXComponent(post?.body.code || "");

  return (
    <article>
      <div className="prose mx-auto max-w-2xl break-words text-[#112827] dark:prose-invert prose-h2:mt-[-100px] prose-h2:pt-[100px] prose-h3:text-base prose-p:before:content-none prose-p:after:content-none prose-a:text-sky-600 prose-a:no-underline prose-blockquote:rounded-r prose-blockquote:border-rose-500 prose-blockquote:bg-gray-200 prose-blockquote:px-4 prose-blockquote:py-0.5 prose-blockquote:font-normal prose-blockquote:not-italic prose-em:font-semibold prose-em:not-italic prose-em:text-[#112827] prose-code:text-rose-500 prose-code:before:content-none prose-code:after:content-none prose-ol:pl-5 prose-ul:pl-5 prose-li:marker:text-[#112827] prose-table:mb-5 prose-table:border-separate prose-table:border-spacing-1 prose-table:text-center prose-th:rounded prose-th:bg-gray-300 prose-th:p-1.5 prose-td:rounded prose-td:bg-gray-200 prose-td:p-1.5 prose-hr:border-gray-300 dark:text-[#fff] dark:prose-a:text-sky-400 dark:prose-blockquote:border-pink-400 dark:prose-blockquote:bg-slate-900 dark:prose-em:text-[#fff] dark:prose-code:text-pink-400 dark:prose-li:marker:text-[#fff] dark:prose-th:bg-slate-700 dark:prose-td:bg-slate-600 dark:prose-hr:border-gray-700">
        <section className="py-4">
          <PostContents post={post} type="page" />
        </section>
        <section>
          <MDXComponent />
        </section>
      </div>
    </article>
  );
};

export default PostDetailPage;
