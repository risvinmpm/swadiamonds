import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";

import Trend from "@/components/main/Trend";
import Form from "@/components/main/Form";
import SocialStats from "@/components/common/SocialStats";
import SocialShare from "@/components/common/SocialShare";
import BlogContent from "@/components/blog/bloglist/BlogContent";
import RelatedPosts from "@/components/blog/bloglist/RelatedPosts";

import icon_fb from "@/public/assets/icon_fb.png";
import icon_tw from "@/public/assets/icon_tw.png";
import icon_ins from "@/public/assets/icon_ins.png";
import icon_yo from "@/public/assets/icon_yo.png";

const socialItems = [
  { icon: icon_fb, label: "Fans", count: "8,045" },
  { icon: icon_tw, label: "Followers", count: "5,210" },
  { icon: icon_ins, label: "Followers", count: "10,300" },
  { icon: icon_yo, label: "Subscribers", count: "3,870" }
];

type Params = Promise<{ slug: string }>;

// Page Component
export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <section className="main-padding">
      <Trend />

      <main className="grid grid-cols-1 md:grid-cols-12 gap-7">
        <section className="md:col-span-8 space-y-6">
          <div className="overflow-hidden rounded-md shadow-lg">
            <Image
              src={post.image}
              alt={post.alt}
              width={800}
              height={400}
              className="w-full h-[300px] lg:h-[600px] object-cover rounded-md"
            />
          </div>

          <BlogContent content={post.content} content2={post.content2} />
        </section>

        <aside className="md:col-span-4">
          <RelatedPosts currentSlug={post.slug} />
          <h2 className="text-2xl font-bold mb-6 mt-10">Follow Us</h2>
          <SocialStats items={socialItems} />
        </aside>
      </main>

      <div className="mt-10 hidden lg:block">
        <SocialShare items={socialItems} />
      </div>

      <Form />
    </section>
  );
}
