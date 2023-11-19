import { useMemo } from "react";

import { compareDesc } from "date-fns";

import FilterablePosts from "@/app/components/FilterablePosts";
import { allPosts } from "@/contentlayer/generated";

const categories = ["All", "JavaScript", "TypeScript", "React.js", "NEXT.js"];

export default function PostsPage() {
    const sortedAllPosts = useMemo(() => {
        return allPosts.sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));
    }, []);

    return <FilterablePosts posts={sortedAllPosts} categories={categories} />;
}
