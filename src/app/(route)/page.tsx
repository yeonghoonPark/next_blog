import { useMemo } from "react";

import SectionTitle from "@/app/components/SectionTitle";
import { allPosts } from "@/contentlayer/generated";

import PostsGrid from "../components/PostsGrid";

const FEATURED_POSTS_TITLE = "Featured Posts";

export default function HomePage() {
    const featuredPosts = useMemo(() => allPosts.filter(({ featured }) => featured), []);

    return (
        <section className="mb-12">
            <SectionTitle title={FEATURED_POSTS_TITLE} count={featuredPosts.length} />
            <PostsGrid posts={featuredPosts} />
        </section>
    );
}
