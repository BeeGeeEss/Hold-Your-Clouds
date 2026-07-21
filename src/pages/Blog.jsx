import BlogList from "../components/blog/BlogList";
import posts from "../data/posts";

export default function Blog() {
  return (
    <div className="page-container">
      <BlogList posts={posts} />
    </div>
  );
}
