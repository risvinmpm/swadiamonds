import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import markdownToHtml from '@/lib/markdownToHtml';
import { notFound } from 'next/navigation';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map(slug => ({ slug: slug.replace(/\.md$/, '') }));
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  const content = await markdownToHtml(post.content);

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.meta.title}</h1>
      <p className="text-gray-500 text-sm mb-6">{post.meta.date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
