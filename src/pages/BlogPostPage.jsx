import { useParams } from "react-router-dom";

import posts from "../data/posts";
import BlogPost from "../components/BlogPost";

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = posts.find((post) => post.slug === slug);

  return <BlogPost post={post} />;
}
