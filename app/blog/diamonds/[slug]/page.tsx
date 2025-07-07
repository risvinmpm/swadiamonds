import Image from "next/image";
import { rightSideItems } from "@/lib/rightSideItems";
import Markdown from "react-markdown";
import Trend from "@/components/main/Trend";
import Form from "@/components/main/Form";
import RightSideList from "@/components/main/RightSideList";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

import icon_fb from "../../../../public/assets/icon_fb.png";
import icon_tw from "../../../../public/assets/icon_tw.png";
import icon_ins from "../../../../public/assets/icon_ins.png";
import icon_yo from "../../../../public/assets/icon_yo.png";

// Social media icons
const socialItems: { icon: StaticImageData; label: string; count: string }[] = [
  { icon: icon_fb, label: "Fans", count: "8,045" },
  { icon: icon_tw, label: "Followers", count: "5,210" },
  { icon: icon_ins, label: "Followers", count: "10,300" },
  { icon: icon_yo, label: "Subscribers", count: "3,870" },
];

// Generate static paths
export async function generateStaticParams() {
  return rightSideItems.map((item) => ({ slug: item.slug }));
}

// Metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = rightSideItems.find((i) => i.slug === params.slug);
  if (!item) return { title: "Not Found" };
  return {
    title: item.title,
    description: item.alt,
  };
}

// Page Component
export default function DiamondDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = rightSideItems.find((i) => i.slug === params.slug);

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
        {/* Left Content */}
        <section className="md:col-span-8 space-y-6">
          <div className="overflow-hidden rounded-md shadow-lg">
            <Image
              src={item.image}
              alt={item.alt}
              width={800}
              height={400}
              className="w-full h-[600px] object-cover rounded-md"
            />
          </div>

          <article className="prose prose-lg max-w-none text-gray-800">
            <Markdown
              components={{
                h2: (props) => (
                  <h2
                    className="text-2xl font-semibold mt-8 mb-2 text-teal-700"
                    {...props}
                  />
                ),
                p: (props) => (
                  <p
                    className="text-base leading-relaxed mb-4 text-gray-700"
                    {...props}
                  />
                ),
              }}
            >
              {item.content}
            </Markdown>

            {item.content2 && (
              <Markdown
                components={{
                  h2: (props) => (
                    <h2
                      className="text-2xl font-semibold mt-8 mb-2 text-indigo-700"
                      {...props}
                    />
                  ),
                  p: (props) => (
                    <p
                      className="text-base leading-relaxed mb-4 text-gray-700"
                      {...props}
                    />
                  ),
                }}
              >
                {item.content2}
              </Markdown>
            )}
          </article>
        </section>

        {/* Right Sidebar */}
        <aside className="md:col-span-4">
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore More</h3>
            <RightSideList />
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Follow Us</h2>
          <div className="grid grid-cols-2 gap-5">
            {socialItems.map((item, index) => (
              <div key={index} className="flex mt-5 gap-4">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={32}
                  height={32}
                />
                <div>
                  <p className="text-sm font-semibold">{item.count}</p>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </main>

      {/* Share Section */}
      <div className="mt-10 hidden lg:block">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-bold">Share:</h1>
          {socialItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <Image src={item.icon} alt={item.label} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>

      <Form />
    </section>
  );
}
