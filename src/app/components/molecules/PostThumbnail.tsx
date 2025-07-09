import { memo } from "react";

import Image from "next/image";

type Props = {
  altText: string;
  thumbnail: string;
};

const PostThumbnail = ({ altText, thumbnail }: Props) => {
  return (
    <figure className="rounded-ss-3xl rounded-ee-3xl overflow-hidden shadow-md dark:shadow-gray-500/40 shadow-slate-800/40">
      <Image
        className="grayscale-[33%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-300"
        width={640}
        height={426}
        src={thumbnail}
        alt={altText}
        priority
      />
      <figcaption className="sr-only">{altText}</figcaption>
    </figure>
  );
};

export default memo(PostThumbnail);
