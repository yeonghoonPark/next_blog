"use client";

import { compareDesc } from "date-fns";

import { PostsGrid, SectionTitle } from "@/app/components";
import { CATEGORY_ALL } from "@/app/constants";
import { useCategoryStore } from "@/app/store";
import { allPosts } from "@/contentlayer/generated";

const PostsPage = () => {
  const category = useCategoryStore((state) => state.category);

  /**
   * Sort all posts by the 'createdAt' date in descending order
   */
  const sortedAllPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );

  /**
   * Filter posts where the 'featured' field is true
   */
  const filteredPosts = sortedAllPosts.filter(
    (post) => post.category === category || category === CATEGORY_ALL,
  );

  return (
    <section>
      <SectionTitle title={category} count={filteredPosts.length} />
      <PostsGrid posts={filteredPosts} />
    </section>
  );
};

export default PostsPage;
