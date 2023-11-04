import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "@/contentlayer/generated";

export default function HomePage() {
    const MDXComponent = useMDXComponent(allPosts[0].body.code || "");

    return (
        <section>
            <h1>HomePage</h1>
            {allPosts.map(({ title, description, category, thumbnail, createdAt }) => (
                <div key={title + createdAt}>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <p>{category}</p>
                    <time>{createdAt}</time>
                    <img src={thumbnail} alt={title} />
                    <MDXComponent />
                </div>
            ))}
        </section>
    );
}
