import { compareDesc } from "date-fns";
import SectionTitle from "@/app/components/molecules/SectionTitle";
import PostsGrid from "@/app/components/organisms/PostsGrid";
import { allPosts } from "@/contentlayer/generated";

const FEATURED_POSTS_TITLE = "Featured Posts";

const HomePage = () => {
  const sortedAllPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );

  const featuredPosts = sortedAllPosts.filter(({ featured }) => featured);

  return (
    <section>
      <SectionTitle title={FEATURED_POSTS_TITLE} count={featuredPosts.length} />
      <PostsGrid posts={featuredPosts} />
    </section>
  );
};

export default HomePage;
