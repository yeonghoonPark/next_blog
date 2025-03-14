"use client";

import { compareDesc } from "date-fns";

import SectionTitle from "@/app/components/molecules/SectionTitle";
import PostsGrid from "@/app/components/organisms/PostsGrid";
import { CATEGORY_ALL } from "@/app/constants/posts";
import { useCategoryStore } from "@/app/store/posts/useCategoryStore";
import { allPosts } from "@/contentlayer/generated";

const PostsPage = () => {
  const category = useCategoryStore((state) => state.category);

  // Sort all posts by the 'createdAt' date in descending order
  const sortedAllPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );

  // Filter posts where the 'featured' field is true
  const filteredPosts = sortedAllPosts.filter(
    (post) => post.category === category || category === CATEGORY_ALL,
  );

  const getSectionTitle = (prefix: string, suffix: string) => `${prefix} ${suffix}`;

  return (
    <section>
      <SectionTitle title={getSectionTitle(category, "POSTS")} count={filteredPosts.length} />
      <PostsGrid posts={filteredPosts} />
    </section>
  );
};

export default PostsPage;
