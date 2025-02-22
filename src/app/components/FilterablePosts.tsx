"use client";

import { useMemo, useState } from "react";
import CategoryNavMenu from "@/app/components/CategoryNavMenu";
import CategoryTitle from "@/app/components/CategoryTitle";
import SectionTitle from "@/app/components/molecules/SectionTitle";
import PostsGrid from "@/app/components/PostsGrid";
import { Post } from "@/contentlayer/generated";

const ALL = "All";
const POSTS_TITLE = "Posts";
const CATEGORY_TITLE = "Category";

type Props = {
  posts: Post[];
  categories: string[];
};

export default function FilterablePosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => (selected === ALL ? post : post.category === selected));
  }, [posts, selected]);

  const getTitle = (selected: string): string => {
    return `${selected} ${POSTS_TITLE}`;
  };

  return (
    <section className="flex flex-col items-center gap-6">
      <section className="flex w-full flex-col items-center gap-0 sm:gap-6">
        <CategoryTitle title={CATEGORY_TITLE} />
        <CategoryNavMenu
          categories={categories}
          selected={selected}
          onCategoryClick={setSelected}
        />
      </section>
      <section className="mb-12">
        <SectionTitle title={getTitle(selected)} count={filteredPosts.length} />
        <PostsGrid posts={filteredPosts} />
      </section>
    </section>
  );
}
