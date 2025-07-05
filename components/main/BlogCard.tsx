import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({ slug, title, excerpt, date }: BlogCardProps) {
  return (
    <div className="p-4 border rounded-xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500 mb-1">{date}</p>
      <p className="mb-2">{excerpt}</p>
      <Link href={`/blog/${slug}`} className="text-blue-500 underline">
        Read more →
      </Link>
    </div>
  );
}
