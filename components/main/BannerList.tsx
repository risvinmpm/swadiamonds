import Link from "next/link";
import React from "react";
import { BlogPost } from "@/lib/blogData";
import Image from "next/image";

const BannerList = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group">
      <Image
        src={post.image}
        width={300}
        height={200}
        alt={post.title}
        className="w-full h-[200px] object-cover rounded-md shadow-md"
      />
      <Link href={`/blog/bloglist/${post.slug}`} className="block mt-5">
        <h2 className="text-lg font-semibold group-hover:text-teal-600 transition-colors duration-300">
          {post.title}
        </h2>
        {/* <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p> */}
      </Link>
    </div>
  );
};

export default BannerList;
