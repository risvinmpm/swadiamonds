import BannerList from "@/components/main/BannerList";
import { blogPosts } from "@/lib/blogData";

export default function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = blogPosts.filter((b) => b.slug !== currentSlug).slice(0, 5);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Explore More</h3>
      <div className="grid grid-cols-1 gap-4">
        {related.map((b) => (
          <BannerList key={b.slug} post={b} />
        ))}
      </div>
    </div>
  );
}
