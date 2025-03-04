import Image from "next/image";
import PostContents from "@/app/components/PostContents";
import { Post } from "@/contentlayer/generated";

type Props = {
  post: Post;
};

const youtube = {
  desktop: { w: 330, h: 285, count: 4, isNavShowing: true },
};

const blog = {
  desktop: { w: 375, h: 300, count: 4, isNavShowing: false },
};

const my = {
  desktop: { w: 378, h: 394, count: 3, isNavShowing: true },
};

const PostCard = ({ post }: Props) => {
  const { title, thumbnail } = post;
  return (
    <article>
      <figure className="group overflow-hidden rounded-md rounded-ee-3xl rounded-ss-3xl">
        <Image
          className="grayscale-[33%] transition duration-200 group-hover:scale-110 group-hover:grayscale-0"
          width={640}
          height={426}
          src={thumbnail as string}
          alt={`${title}'s image`}
          priority
        />
      </figure>

      <section className="flex flex-col gap-2 pt-4">
        <PostContents post={post} type="card" />
      </section>
    </article>

    // border-neutral-300 dark:border-gray-700 border

    // <article className="group flex h-64 w-80 flex-col overflow-hidden rounded-md rounded-ee-3xl rounded-ss-3xl">
    //   <figure className="relative mb-2 h-44 overflow-hidden rounded-b-md">
    //     <Image
    //       alt={`${title}'s image`}
    //       className="transition duration-200 group-hover:scale-110 group-hover:grayscale-0"
    //       fill
    //       objectFit="fill"
    //       priority
    //       src={thumbnail as string}
    //     />
    //   </figure>

    //   <section className="flex flex-col gap-2">
    //     <PostContents post={post} type="card" />
    //   </section>
    // </article>
  );
};

export default PostCard;
