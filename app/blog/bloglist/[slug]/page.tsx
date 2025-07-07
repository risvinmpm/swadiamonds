import Image from "next/image";
import Markdown from "react-markdown";
import { blogPosts } from "@/lib/blogData";
import Trend from "@/components/main/Trend";

import icon_fb from "../../../../public/assets/icon_fb.png";
import icon_tw from "../../../../public/assets/icon_tw.png";
import icon_ins from "../../../../public/assets/icon_ins.png";
import icon_yo from "../../../../public/assets/icon_yo.png";

import type { StaticImageData } from "next/image";
import Form from "@/components/main/Form";

// Social media data
const socialItems: { icon: StaticImageData; label: string; count: string }[] = [
  { icon: icon_fb, label: "Fans", count: "8,045" },
  { icon: icon_tw, label: "Followers", count: "5,210" },
  { icon: icon_ins, label: "Followers", count: "10,300" },
  { icon: icon_yo, label: "Subscribers", count: "3,870" }
];

// Optional: generateStaticParams for SSG (recommended if statically generating pages)
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }));
}

// Blog detail page component
export default async function BlogDetail(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);

  // If post not found, manually return null or custom fallback
  if (!post) return <p className="text-center text-red-500">Post not found.</p>;

  return (
    <section className="main-padding">
      <Trend />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-7">
        {/* Left Content */}
        <section className="md:col-span-8 space-y-6">
          {/* Image */}
          <div className="overflow-hidden rounded-md shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-md shadow"
            />
          </div>

          {/* Markdown Content */}
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
                )
              }}
            >
              {post.content}
            </Markdown>

            {"content2" in post && (
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
                  )
                }}
              >
                {(post as any).content2}
              </Markdown>
            )}
          </article>
        </section>

        {/* Right Sidebar */}
        <aside className="md:col-span-4">
          <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
          <div className="grid grid-cols-2 gap-5">
            {socialItems.map((item, index) => (
              <div key={index} className="flex mt-5 gap-4">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
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
      <div className="mt-10 hidden lg:block">
        <div className="flex items-center gap-5">
          <h1 className="text-2xl font-bold">Share:</h1>
          {socialItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <Image
                src={item.icon}
                alt={item.label}
                width={24}
                height={24}
                className="w-7 h-7 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <Form />
    </section>
  );
}
