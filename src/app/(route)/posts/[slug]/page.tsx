import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";
import PostMeta from "@/app/components/organisms/PostMeta";
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
      <div className="dark:prose-blockquote:bg-slate-900 prose-blockquote:bg-gray-200 prose-blockquote:px-4 prose-blockquote:py-0.5 prose-table:mb-5 dark:prose-th:bg-slate-700 dark:prose-td:bg-slate-600 prose-td:bg-gray-200 prose-th:bg-gray-300 dark:prose-invert mx-auto prose-h2:mt-[-100px] prose-td:p-1.5 prose-th:p-1.5 prose-h2:pt-[100px] prose-ol:pl-5 prose-ul:pl-5 dark:prose-blockquote:border-pink-400 dark:prose-hr:border-gray-700 prose-hr:border-gray-300 prose-blockquote:border-rose-500 prose-td:rounded prose-th:rounded prose-blockquote:rounded-r max-w-6xl prose-blockquote:font-normal prose-em:font-semibold text-[#112827] dark:text-[#fff] dark:prose-a:text-sky-400 dark:prose-em:text-[#fff] dark:prose-code:text-pink-400 dark:prose-li:marker:text-[#fff] prose-a:text-sky-600 prose-code:text-rose-500 prose-em:text-[#112827] prose-li:marker:text-[#112827] prose-h3:text-base prose-table:text-center prose-a:no-underline break-words prose-blockquote:not-italic prose-em:not-italic prose-p:before:content-none prose-code:before:content-none prose-p:after:content-none prose-code:after:content-none prose-table:border-separate prose-table:border-spacing-1 prose">
        <section className="py-4">
          <PostMeta post={post} type="post" />
        </section>
        <section>
          <MDXComponent />
        </section>
      </div>
    </article>
  );
};

export default PostDetailPage;
