import { getAllPosts } from '@/lib/posts';
import BlogCard from '../../components/main/BlogCard';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      {posts.map(post => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.meta.title}
          excerpt={post.meta.excerpt}
          date={post.meta.date}
        />
      ))}
    </main>
  );
}
