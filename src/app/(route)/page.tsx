import SectionTitle from "@/app/components/molecules/SectionTitle";
import PostsGrid from "@/app/components/organisms/PostsGrid";
import { allPosts } from "@/contentlayer/generated";

const FEATURED_POSTS_TITLE = "Featured Posts";

const HomePage = () => {
  const featuredPosts = allPosts.filter(({ featured }) => featured);

  return (
    <section>
      <SectionTitle title={FEATURED_POSTS_TITLE} count={featuredPosts.length} />
      <PostsGrid posts={featuredPosts} />
    </section>
  );
};

export default HomePage;
