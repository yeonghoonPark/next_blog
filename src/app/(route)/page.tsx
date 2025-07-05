import { compareDesc, isAfter, subMonths } from "date-fns";

import { PostsCarousel, PostsGrid, SectionTitle } from "@/app/components";
import { getRandomItems } from "@/app/utils/arrayUtils";
import { allPosts } from "@/contentlayer/generated";

const FEATURED_POSTS_TITLE = "Featured Posts";
const RECENT_POSTS_TITLE = "Recent Posts";
const YOU_MAY_ALSO_LIKE_TITLE = "You May Also Like";

const HomePage = () => {
  // Sort all posts by the 'createdAt' date in descending order
  const sortedAllPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );

  // Filter posts where the 'featured' field is true
  const featuredPosts = sortedAllPosts.filter(({ featured }) => featured);

  // Filter posts that were created within the last 1 month
  const recentPosts = sortedAllPosts.filter((post) =>
    isAfter(new Date(post.createdAt), subMonths(new Date(), 1)),
  );

  // Filter out posts that are in 'recentPosts' or 'featuredPosts'
  const notRecentOrFeatured = sortedAllPosts.filter(
    (post) =>
      !recentPosts.some((recentPost) => recentPost._id === post._id) &&
      !featuredPosts.some((featuredPost) => featuredPost._id === post._id),
  );

  // Get 4 random posts from the filtered posts
  const youMayAlsoLikePosts = getRandomItems(notRecentOrFeatured, 4);

  return (
    <section>
      {/* Featured posts section: Posts where "featured" is true */}
      {featuredPosts.length ? (
        <>
          <SectionTitle title={FEATURED_POSTS_TITLE} count={featuredPosts.length} />
          <PostsGrid posts={featuredPosts} />
        </>
      ) : (
        <></>
      )}

      {/* You may also like section: Randomly selected posts that are not in the recent or featured categories */}
      <div className="hidden md:block">
        <SectionTitle title={YOU_MAY_ALSO_LIKE_TITLE} count={youMayAlsoLikePosts.length} />
        <PostsCarousel posts={youMayAlsoLikePosts} />
      </div>

      {/* Recent posts section: Posts created within the last month */}
      {recentPosts.length ? (
        <>
          <SectionTitle title={RECENT_POSTS_TITLE} count={recentPosts.length} />
          <PostsGrid posts={recentPosts} />
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default HomePage;
