"use client";

import { useCallback, useMemo, useState } from "react";

import CategoryNavMenu from "@/app/components/CategoryNavMenu";
import CategoryTitle from "@/app/components/CategoryTitle";
import PostsGrid from "@/app/components/PostsGrid";
import SectionTitle from "@/app/components/SectionTitle";
import { Post } from "@/contentlayer/generated";

const ALL = "All";
const POSTS_TITLE = "POSTS";
const CATEGORY_TITLE = "CATEGORY";

type Props = {
    posts: Post[];
    categories: string[];
};

export default function FilterablePosts({ posts, categories }: Props) {
    const [selected, setSelected] = useState(ALL);

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => (selected === ALL ? post : post.category === selected));
    }, [posts, selected]);

    const getTitleToUpperCase = useCallback((selected: string): string => {
        return `${selected.toUpperCase()} ${POSTS_TITLE}`;
    }, []);

    return (
        <section className="flex flex-col items-center gap-6">
            <section className="flex flex-col items-center gap-0 sm:gap-6 w-full">
                <CategoryTitle title={CATEGORY_TITLE} />
                <CategoryNavMenu
                    categories={categories}
                    selected={selected}
                    onCategoryClick={setSelected}
                />
            </section>
            <section className="mb-12">
                <SectionTitle title={getTitleToUpperCase(selected)} count={filteredPosts.length} />
                <PostsGrid posts={filteredPosts} />
            </section>
        </section>
    );
}
