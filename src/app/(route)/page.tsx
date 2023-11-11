import { allPosts } from "@/contentlayer/generated";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    const featuredPosts = allPosts.filter(({ featured }) => featured);
    const featuredPostsCount = featuredPosts.length;
    const allPostsCount = allPosts.length;
    return (
        <>
            <section className="mb-12">
                <h2 className="text-xl font-semibold my-4">
                    FEATURED POSTS&nbsp;
                    <span className="text-emerald-500">&nbsp;{`${featuredPostsCount}`}</span>
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {featuredPosts.map(
                        ({ _raw, title, description, category, thumbnail, createdAt }) => (
                            <li
                                key={title + createdAt}
                                className="rounded-md rounded-ss-3xl overflow-hidden shadow dark:shadow-neutral-600 group"
                            >
                                <Link href={`/posts/${_raw.flattenedPath}`}>
                                    <article className="flex flex-col">
                                        <div className="overflow-hidden">
                                            <Image
                                                className="grayscale-[33%] group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
                                                width={640}
                                                height={426}
                                                src={thumbnail as string}
                                                alt={title}
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-1 p-2">
                                            <h2 className="font-semibold">{title}</h2>
                                            <p className="text-sm">{description}</p>
                                            <span className="self-end text-xs">{category}</span>
                                            <time className="self-end text-xs text-neutral-500 dark:text-neutral-400">
                                                {createdAt}
                                            </time>
                                        </div>
                                    </article>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </section>

            <section className="mb-12">
                <h2 className="text-xl font-semibold my-4">
                    ALL POSTS&nbsp;
                    <span className="text-emerald-500">&nbsp;{`${allPostsCount}`}</span>
                </h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {allPosts.map(
                        ({ _raw, title, description, category, thumbnail, createdAt }) => (
                            <li
                                key={title + createdAt}
                                className="rounded-md rounded-ss-3xl overflow-hidden shadow dark:shadow-neutral-600 group"
                            >
                                <Link href={`/posts/${_raw.flattenedPath}`}>
                                    <article className="flex flex-col">
                                        <div className="overflow-hidden">
                                            <Image
                                                className="grayscale-[33%] group-hover:grayscale-0 group-hover:scale-110 transition duration-300"
                                                width={640}
                                                height={426}
                                                src={thumbnail as string}
                                                alt={title}
                                            />
                                        </div>
                                        <div className="flex flex-col items-center gap-1 p-2">
                                            <h2 className="font-semibold">{title}</h2>
                                            <p className="text-sm">{description}</p>
                                            <span className="self-end text-xs">{category}</span>
                                            <time className="self-end text-xs text-neutral-500 dark:text-neutral-400">
                                                {createdAt}
                                            </time>
                                        </div>
                                    </article>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </section>
        </>
    );
}
