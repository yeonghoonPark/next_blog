"use client";

import CategoryNavMenu from "@/app/components/CategoryNavMenu";
import CategoryTitle from "@/app/components/CategoryTitle";
import SectionTitle from "@/app/components/molecules/SectionTitle";
import PostsGrid from "@/app/components/PostsGrid";
import { ALL, CATEGORIES, CATEGORY_TITLE, POSTS_TITLE } from "@/app/constants/posts";
import { Category } from "@/app/models/posts";
import { useCategoryStore } from "@/app/store/posts/useCategoryStore";
import { Post } from "@/contentlayer/generated";

type Props = {
  posts: Post[];
};

const FilterablePosts = ({ posts }: Props) => {
  const category = useCategoryStore((state) => state.category);
  const setCategory = useCategoryStore((state) => state.actions.setCategory);

  const filteredPosts = posts.filter((post) =>
    category === ALL ? post : post.category === category,
  );

  const changeCategory = (category: Category) => setCategory(category);

  const getTitle = (category: Category) => `${category} ${POSTS_TITLE}`;

  return (
    <section className="flex flex-col items-center gap-6">
      <section className="flex w-full flex-col items-center gap-0 sm:gap-6">
        <CategoryTitle title={CATEGORY_TITLE} />
        <CategoryNavMenu
          categories={CATEGORIES}
          currentCategory={category}
          onClick={changeCategory}
        />
      </section>
      <section className="mb-12">
        <SectionTitle title={getTitle(category)} count={filteredPosts.length} />
        <PostsGrid posts={filteredPosts} />
      </section>
    </section>
  );
};

export default FilterablePosts;
