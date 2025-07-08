// app/blog/bloglist/[slug]/page.tsx

import { blogPosts } from "@/lib/blogData";
import type { Metadata } from "next";
import Image from "next/image";
import Markdown from "react-markdown";
import Trend from "@/components/main/Trend";
import Form from "@/components/main/Form";

import icon_fb from "../../../../public/assets/icon_fb.png";
import icon_tw from "../../../../public/assets/icon_tw.png";
import icon_ins from "../../../../public/assets/icon_ins.png";
import icon_yo from "../../../../public/assets/icon_yo.png";

const socialItems = [
  { icon: icon_fb, label: "Fans", count: "8,045" },
  { icon: icon_tw, label: "Followers", count: "5,210" },
  { icon: icon_ins, label: "Followers", count: "10,300" },
  { icon: icon_yo, label: "Subscribers", count: "3,870" },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  return {
    title: post?.title ?? "Post Not Found",
    description: post?.alt ?? "",
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <section className="main-padding">
        <Trend />
        <div className="text-center py-20 text-2xl text-red-600 font-semibold">
          Blog post not found.
        </div>
        <Form />
      </section>
    );
  }

  return (
    <section className="main-padding">
      <Trend />
      <main className="grid grid-cols-1 md:grid-cols-12 gap-7">
        <section className="md:col-span-8 space-y-6">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-md"
          />
          <article className="prose prose-lg max-w-none text-gray-800">
            <Markdown>{post.content}</Markdown>
            {post.content2 && <Markdown>{post.content2}</Markdown>}
          </article>
        </section>

        <aside className="md:col-span-4">
          <h2 className="text-2xl font-bold mb-6 mt-4">Follow Us</h2>
          <div className="grid grid-cols-2 gap-5">
            {socialItems.map((item, index) => (
              <div key={index} className="flex mt-5 gap-4">
                <Image src={item.icon} alt={item.label} width={32} height={32} />
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
              <Image src={item.icon} alt={item.label} width={24} height={24} />
            </div>
          ))}
        </div>
      </div>

      <Form />
    </section>
  );
}
