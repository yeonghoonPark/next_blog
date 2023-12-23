import { useMemo } from "react";

import PostsGrid from "@/app/components/PostsGrid";
import SectionTitle from "@/app/components/SectionTitle";
import { allPosts } from "@/contentlayer/generated";

const FEATURED_POSTS_TITLE = "Featured Posts";

export default function HomePage() {
    const featuredPosts = useMemo(() => allPosts.filter(({ featured }) => featured), []);

    return (
        <section className="mb-12 mx-auto">
            <SectionTitle title={FEATURED_POSTS_TITLE} count={featuredPosts.length} />
            <PostsGrid posts={featuredPosts} />
        </section>
    );
}
