import { defineDocumentType, makeSource } from "contentlayer/source-files";
import highlight from "rehype-highlight";
import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: "mdx",
    filePathPattern: "**/*.mdx",

    // mdx로 작성한 글 정보에 대해 입력해야하는 필드 정의
    /*
        [필드명]: {
            type: '자료형',
            required: '필수여부',
        }
    */

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

const contentSource = makeSource({
    // mdx 파일이 저장 되어 있는 루트 폴더
    contentDirPath: "data/posts",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [],
        rehypePlugins: [
            [
                rehypePrettyCode,
                {
                    theme: "dark-plus",
                },
                highlight,
            ],
        ],
    },
});

export default contentSource;
