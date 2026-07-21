import becomingAWebDeveloper from "../posts/becoming-a-web-developer.md?raw";
import learningReact from "../posts/learning-react.md?raw";

const posts = [
  {
    id: 1,
    slug: "becoming-a-web-developer",
    title: "Becoming a Web Developer",
    excerpt:
      "My journey learning web development and the technologies I have been working with.",
    category: "Web Development",
    date: "2026-07-21",
    readTime: "5 min read",
    image: null,
    content: becomingAWebDeveloper,
  },

  {
    id: 2,
    slug: "learning-react",
    title: "What I Am Learning About React",
    excerpt:
      "Some of the things I have learned while building applications with React.",
    category: "React",
    date: "2026-07-20",
    readTime: "4 min read",
    image: null,
    content: learningReact,
  },
];

export default posts;
