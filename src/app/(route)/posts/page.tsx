"use client";

import { compareDesc } from "date-fns";
import SectionTitle from "@/app/components/molecules/SectionTitle";
import PostsGrid from "@/app/components/organisms/PostsGrid";
import { CATEGORY_ALL, POSTS_TITLE } from "@/app/constants/posts";
import { Category } from "@/app/models/posts";
import { useCategoryStore } from "@/app/store/posts/useCategoryStore";
import { allPosts } from "@/contentlayer/generated";

const PostsPage = () => {
  const category = useCategoryStore((state) => state.category);

  const sortedAllPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );
  const filteredPosts = sortedAllPosts.filter((post) =>
    category === CATEGORY_ALL ? post : post.category === category,
  );

  const getTitle = (category: Category) => `${category} ${POSTS_TITLE}`;

  return (
    <section>
      <SectionTitle title={getTitle(category)} count={filteredPosts.length} />
      <PostsGrid posts={filteredPosts} />
    </section>
  );
};

export default PostsPage;
