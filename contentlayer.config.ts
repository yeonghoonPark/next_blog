import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: "mdx",
    filePathPattern: "**/*.mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        },
        category: {
            type: "string",
            required: true,
        },
        thumbnail: {
            type: "string",
            required: false,
        },
        createdAt: {
            type: "date",
            required: true,
        },
        featured: {
            type: "boolean",
            required: true,
        },
    },
}));

const rehypeOptions = {
    theme: "one-dark-pro",
    keepBackground: true,
};

const contentSource = makeSource({
    contentDirPath: "data/posts",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [[rehypePrettyCode, rehypeOptions], rehypeSlug],
    },
});

export default contentSource;
