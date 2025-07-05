import { compareDesc } from "date-fns";

import { PostsCarousel, PostsGrid, SectionTitle } from "@/app/components";
import { getRandomItems } from "@/app/utils";
import { allPosts } from "@/contentlayer/generated";

const TITLES = {
  FEATURED: "Featured Posts",
  RECENT: "Recent Posts",
  YOU_MAY_ALSO_LIKE: "You May Also Like",
} as const;

const POST_COUNTS = {
  RECENT: 3,
  RECOMMENDED: 4,
} as const;

const HomePage = () => {
  /**
   *  Sort all posts by the 'createdAt' date in descending order
   */
  const sortedAllPosts = [...allPosts] //
    .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));

  /**
   * Filter posts where the 'featured' field is true
   */
  const featuredPosts = sortedAllPosts.filter(({ featured }) => featured);

  /**
   * Filter the last posts 3
   */
  const recentPosts = sortedAllPosts.slice(0, POST_COUNTS.RECENT);

  /**
   * Filter out posts that are in 'recentPosts' or 'featuredPosts'
   */
  const excludedIds = new Set([
    ...featuredPosts.map(({ _id }) => _id),
    ...recentPosts.map(({ _id }) => _id),
  ]);
  const notRecentOrFeatured = sortedAllPosts //
    .filter(({ _id }) => !excludedIds.has(_id));

  /**
   *  Get 4 random posts from the filtered posts
   */
  const youMayAlsoLikePosts = getRandomItems(
    notRecentOrFeatured,
    POST_COUNTS.RECOMMENDED,
  );

  return (
    <section>
      {/* Featured posts section: Posts where "featured" is true */}
      {featuredPosts.length ? (
        <>
          <SectionTitle
            title={TITLES.FEATURED} //
            count={featuredPosts.length}
          />
          <PostsGrid posts={featuredPosts} />
        </>
      ) : null}

      {/* You may also like section: Randomly selected posts that are not in the recent or featured categories */}
      <div className="hidden md:block">
        <SectionTitle
          title={TITLES.YOU_MAY_ALSO_LIKE} //
          count={youMayAlsoLikePosts.length}
        />
        <PostsCarousel posts={youMayAlsoLikePosts} />
      </div>

      {/* Recent posts section: Last 3 created posts */}
      {recentPosts.length ? (
        <>
          <SectionTitle
            title={TITLES.RECENT} //
            count={recentPosts.length}
          />
          <PostsGrid posts={recentPosts} />
        </>
      ) : null}
    </section>
  );
};

export default HomePage;
