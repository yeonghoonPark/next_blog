import { compareDesc } from "date-fns";
import FilterablePosts from "@/app/components/FilterablePosts";
import { allPosts } from "@/contentlayer/generated";

const PostsPage = () => {
  const sortedAllPosts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );

  return <FilterablePosts posts={sortedAllPosts} />;
};

export default PostsPage;
