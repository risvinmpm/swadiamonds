import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Markdown from "react-markdown";
import Trend from "@/components/main/Trend";
import Form from "@/components/main/Form";
import BannerList from "@/components/main/BannerList";

import icon_fb from "@/public/assets/icon_fb.png";
import icon_tw from "@/public/assets/icon_tw.png";
import icon_ins from "@/public/assets/icon_ins.png";
import icon_yo from "@/public/assets/icon_yo.png";

const socialItems = [
  { icon: icon_fb, label: "Fans", count: "8,045" },
  { icon: icon_tw, label: "Followers", count: "5,210" },
  { icon: icon_ins, label: "Followers", count: "10,300" },
  { icon: icon_yo, label: "Subscribers", count: "3,870" },
];

type Params = Promise<{ slug: string }>;

// ✅ Static params (used at build time)
// export async function generateStaticParams() {
//   return blogPosts.map((post) => ({ slug: post.slug }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const { slug } = params;
//   const post = blogPosts.find((p) => p.slug === slug);

//   if (!post) {
//     return {
//       title: "Not Found",
//       description: "This blog post could not be found.",
//     };
//   }

//   return {
//     title: post.title,
//     description: post.alt,
//   };
// }

// ✅ Correctly typed and awaited page component
export default async function Page({ params }: { params: Params })  {
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
              className="w-full h-[600px] object-cover rounded-md"
            />
          </div>

          <article className="prose prose-lg max-w-none text-gray-800">
            <Markdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-semibold mt-8 mb-2 text-teal-700" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-base leading-relaxed mb-4 text-gray-700" {...props} />
                ),
              }}
            >
              {post.content}
            </Markdown>

            {post.content2 && (
              <Markdown
                components={{
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-semibold mt-8 mb-2 text-indigo-700" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-base leading-relaxed mb-4 text-gray-700" {...props} />
                  ),
                }}
              >
                {post.content2}
              </Markdown>
            )}
          </article>
        </section>

        <aside className="md:col-span-4">
          <div>
            <h3 className="text-xl font-semibold mb-4">Explore More</h3>
            <div className="grid grid-cols-1 gap-4">
              {blogPosts
                .filter((b) => b.slug !== post.slug)
                .slice(0, 5)
                .map((b) => (
                  <BannerList key={b.slug} post={b} />
                ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6 mt-10">Follow Us</h2>
          <div className="grid grid-cols-2 gap-5">
            {socialItems.map((item, index) => (
              <div key={index} className="flex mt-5 gap-4">
                <Image src={item.icon} alt={item.label} width={32} height={32} className="w-8 h-8 object-contain" />
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
