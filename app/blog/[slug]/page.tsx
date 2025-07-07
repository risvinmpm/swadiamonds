import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogData";
import Markdown from "react-markdown";

import icon_fb from "../../../public/assets/icon_fb.png";
import icon_tw from "../../../public/assets/icon_tw.png";
import icon_ins from "../../../public/assets/icon_ins.png";
import icon_yo from "../../../public/assets/icon_yo.png";

import type { StaticImageData } from "next/image";
import Trend from "@/components/main/Trend";

interface BlogDetailProps {
  params: { slug: string };
}

interface SocialItem {
  icon: StaticImageData;
  label: string;
  count: string;
}

const socialItems: SocialItem[] = [
  { icon: icon_fb, label: "Fans", count: "8,045" },
  { icon: icon_tw, label: "Followers", count: "5,210" },
  { icon: icon_ins, label: "Followers", count: "10,300" },
  { icon: icon_yo, label: "Subscribers", count: "3,870" }
];

export default function BlogDetail({ params }: BlogDetailProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="main-padding">
      <Trend />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-7">
        {/* Left Content */}
        <section className="md:col-span-8 space-y-6">
          {/* <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1> */}

          <div className="overflow-hidden rounded-md shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-md shadow"
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
                )
              }}
            >
              {post.content}
            </Markdown>

            {/* Optional second section */}
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
    </section>
  );
}
