import { compareDesc, subMonths } from "date-fns";
import SectionTitle from "@/app/components/molecules/SectionTitle";
import PostsGrid from "@/app/components/organisms/PostsGrid";
import { allPosts } from "@/contentlayer/generated";

const FEATURED_POSTS_TITLE = "Featured Posts";
const RECENT_POSTS_TITLE = "Recent Posts";

const HomePage = () => {
  // sort all posts by the 'createdAt' date in descending order
  const sortedAllPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );

  // filter posts where the 'featured' field is true
  const featuredPosts = sortedAllPosts.filter(({ featured }) => featured);

  // filter posts that were created within the last 1 month
  const recentPosts = sortedAllPosts.filter(
    (post) => new Date(post.createdAt) >= subMonths(new Date(), 1),
  );

  return (
    <section>
      {/* recent posts section: posts created within the last month */}
      <SectionTitle title={RECENT_POSTS_TITLE} count={recentPosts.length} />
      <PostsGrid posts={recentPosts} />

      {/* featured posts section: posts where "featured" is true */}
      <SectionTitle title={FEATURED_POSTS_TITLE} count={featuredPosts.length} />
      <PostsGrid posts={featuredPosts} />
    </section>
  );
};

export default HomePage;
