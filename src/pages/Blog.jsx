import MainLayout from "../components/layout/MainLayout";
import BlogList from "../components/blog/BlogList";
import posts from "../data/posts";

export default function Blog() {
  return (
    <>
      <MainLayout />
      <BlogList posts={posts} />
    </>
  );
}
