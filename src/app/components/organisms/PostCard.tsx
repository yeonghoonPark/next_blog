import { PostMeta, PostThumbnail } from "@/app/components";
import { Post, Reflection } from "@/contentlayer/generated";

type Props = {
  post: Post | Reflection;
};

const PostCard = ({ post }: Props) => {
  const { thumbnail } = post;

  return (
    <article className="group">
      <PostThumbnail altText="image" thumbnail={thumbnail as string} />
      <PostMeta post={post} type="card" />
    </article>
  );
};

export default PostCard;
