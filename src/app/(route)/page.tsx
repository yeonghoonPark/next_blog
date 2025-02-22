import { useMemo } from "react";
import SectionTitle from "@/app/components/molecules/SectionTitle";
import PostsGrid from "@/app/components/PostsGrid";
import { allPosts } from "@/contentlayer/generated";

const FEATURED_POSTS_TITLE = "Featured Posts";

export default function HomePage() {
  const featuredPosts = useMemo(() => allPosts.filter(({ featured }) => featured), []);

  return (
    <section className="mx-auto mb-12">
      <SectionTitle title={FEATURED_POSTS_TITLE} count={featuredPosts.length} />
      <PostsGrid posts={featuredPosts} />
    </section>
  );
}
