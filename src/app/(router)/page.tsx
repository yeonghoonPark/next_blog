import { allPosts } from "@/contentlayer/generated";
import Link from "next/link";

export default function HomePage() {
    return (
        <section>
            <h1>HomePage</h1>

            <h2>Featured Posts</h2>
            <ul className="flex flex-wrap justify-start gap-8">
                {allPosts.map(({ _raw, title, category, thumbnail, createdAt }) => (
                    <li key={title + createdAt} className="w-60 border">
                        <Link href={`/posts/${_raw.flattenedPath}`}>
                            <img src={thumbnail as string} alt={title} />
                            <h2>{title}</h2>
                            <p>{category}</p>
                            <time>{createdAt}</time>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
