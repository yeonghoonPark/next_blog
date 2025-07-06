import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: "posts/**/*.mdx",
  fields: {
    category: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    featured: {
      type: "boolean",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: false,
    },
    title: {
      type: "string",
      required: true,
    },
  },
}));

export const Reflection = defineDocumentType(() => ({
  name: "Reflection",
  contentType: "mdx",
  filePathPattern: "reflections/**/*.mdx",
  fields: {
    category: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: false,
    },
    title: {
      type: "string",
      required: true,
    },
  },
}));

const rehypeOptions = {
  theme: "dark-plus",
  keepBackground: false,
};

const contentSource = makeSource({
  contentDirPath: "data",
  documentTypes: [Post, Reflection],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypeOptions], rehypeSlug],
  },
});

export default contentSource;
