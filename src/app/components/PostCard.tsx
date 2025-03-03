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
    <article className="flex flex-col">
      <section className="overflow-hidden">
        <Image
          className="grayscale-[33%] transition duration-300 group-hover:scale-110 group-hover:grayscale-0"
          width={640}
          height={426}
          src={thumbnail as string}
          alt={`${title}'s image`}
          priority
        />
      </section>

      <section className="flex flex-col gap-2 p-4">
        <PostContents post={post} type="card" />
      </section>
    </article>
  );
};

export default PostCard;
