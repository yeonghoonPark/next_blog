import { compareDesc } from "date-fns";

import { PostsGrid, SectionTitle } from "@/app/components";
import { allReflections } from "@/contentlayer/generated";

const ReflectionsPage = () => {
  /**
   *  Sort all posts by the 'createdAt' date in descending order
   */
  const sortedAllReflections = [...allReflections] //
    .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));

  return (
    <section>
      <SectionTitle title="Reflections" count={sortedAllReflections.length} />
      <PostsGrid posts={sortedAllReflections} />
    </section>
  );
};

export default ReflectionsPage;
