import { rightSideItems } from "@/lib/rightSideItems";
import Trend from "@/components/main/Trend";
import Form from "@/components/main/Form";
import SocialStats from "@/components/common/SocialStats";
import SocialShare from "@/components/common/SocialShare";
import DiamondContent from "@/components/blog/detail/DiamondContent";
import ExploreMoreList from "@/components/blog/detail/ExploreMoreList";
import icon_fb from "@/public/assets/icon_fb.png";
import icon_tw from "@/public/assets/icon_tw.png";
import icon_ins from "@/public/assets/icon_ins.png";
import icon_yo from "@/public/assets/icon_yo.png";
import type { StaticImageData } from "next/image";

const socialItems: { icon: StaticImageData; label: string; count: string }[] = [
  { icon: icon_fb, label: "Fans", count: "8,045" },
  { icon: icon_tw, label: "Followers", count: "5,210" },
  { icon: icon_ins, label: "Followers", count: "10,300" },
  { icon: icon_yo, label: "Subscribers", count: "3,870" },
];

type Params = Promise<{ slug: string }>;

export default async function DiamondDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const item = rightSideItems.find((i) => i.slug === slug);

  if (!item) {
    return (
      <section className="main-padding">
        <Trend />
        <div className="text-center py-20 text-2xl text-red-600 font-semibold">
          Diamond not found.
        </div>
        <Form />
      </section>
    );
  }

  return (
    <section className="main-padding">
      <Trend />

      <main className="grid grid-cols-1 md:grid-cols-12 gap-7">
        {/* Left Side */}
        <section className="md:col-span-8 space-y-6">
          <DiamondContent
            image={item.image}
            alt={item.alt ?? "Diamond image"}
            content={item.content}
            content2={item.content2}
          />
        </section>

        {/* Right Side */}
        <aside className="md:col-span-4">
          <ExploreMoreList />
          <h2 className="text-2xl font-bold mb-6 mt-10">Follow Us</h2>
          <SocialStats items={socialItems} />
        </aside>
      </main>

      {/* Share */}
      <div className="mt-10 hidden lg:block">
        <SocialShare items={socialItems} />
      </div>

      <Form />
    </section>
  );
}
