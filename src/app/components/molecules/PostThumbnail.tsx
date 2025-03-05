import { memo } from "react";
import Image from "next/image";

type Props = {
  altText: string;
  thumbnail: string;
};

const PostThumbnail = ({ altText, thumbnail }: Props) => {
  return (
    <figure className="rounded-md rounded-ss-3xl rounded-ee-3xl overflow-hidden">
      <Image
        className="grayscale-[33%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300"
        width={640}
        height={426}
        src={thumbnail}
        alt={altText}
        priority
      />
    </figure>
  );
};

export default memo(PostThumbnail);
