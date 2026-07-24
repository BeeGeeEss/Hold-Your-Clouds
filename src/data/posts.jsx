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
    image:
      "https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
