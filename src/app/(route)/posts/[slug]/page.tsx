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
    <article
      className={`
      max-w-6xl mx-auto break-words text-slate-700 dark:text-slate-400
      prose dark:prose-invert 
      prose-h2:mt-[-100px] prose-h2:pt-[100px] prose-h2:text-slate-900 dark:prose-h2:text-slate-200
      prose-h3:text-xl prose-h3:text-slate-900 dark:prose-h3:text-slate-200
      prose-p:before:content-none prose-p:after:content-none
    prose-hr:border-gray-300 dark:prose-hr:border-gray-700 
      prose-ol:pl-5 
      prose-ul:pl-5
      prose-li:my-0 prose-li:marker:text-slate-700 dark:prose-li:marker:text-slate-400
      prose-table:mb-5 prose-table:border-separate prose-table:border-spacing-1 prose-table:text-center
      prose-th:p-1.5 prose-th:rounded prose-th:bg-gray-300 dark:prose-th:bg-slate-700
      prose-td:p-1.5 prose-td:rounded prose-td:bg-gray-200 dark:prose-td:bg-slate-600 
    prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-a:no-underline
    prose-em:text-slate-900 dark:prose-em:text-slate-200 prose-em:not-italic prose-em:font-semibold 
    prose-blockquote:bg-gray-200 dark:prose-blockquote:bg-slate-900 prose-blockquote:text-slate-700 dark:prose-blockquote:text-slate-400 prose-blockquote:px-4 prose-blockquote:py-0.5 prose-blockquote:not-italic prose-blockquote:border-blue-600 dark:prose-blockquote:border-yellow-500 prose-blockquote:font-normal prose-blockquote:rounded-r
    prose-code:text-slate-700 dark:prose-code:text-slate-600 prose-code:before:content-none prose-code:after:content-none
      prose-pre:whitespace-pre-wrap 
    `}
    >
      <PostMeta post={post} type="post" />
      <MDXComponent />
    </article>
  );
};

export default PostDetailPage;
