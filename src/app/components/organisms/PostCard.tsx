import PostThumbnail from "@/app/components/molecules/PostThumbnail";
import PostMeta from "@/app/components/organisms/PostMeta";
import { Post } from "@/contentlayer/generated";

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const { title, thumbnail } = post;

  return (
    <article className="group">
      <PostThumbnail altText={`${title}s image`} thumbnail={thumbnail as string} />
      <PostMeta post={post} type="card" />
    </article>
  );
};

export default PostCard;
