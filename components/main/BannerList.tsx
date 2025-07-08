import Link from "next/link";
import React from "react";
import { BlogPost } from "@/lib/blogData";
import Image from "next/image";

interface BannerListProps {
  post: BlogPost;
}

const BannerList: React.FC<BannerListProps> = ({ post }) => {
  return (
    <Link href={`/blog/bloglist/${post.slug}`} className="group block">
      <div className="overflow-hidden rounded-md shadow-md">
        <Image
          src={post.image}
          width={300}
          height={200}
          alt={post.alt || post.title}
          className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2 className="text-lg font-semibold mt-4 group-hover:text-teal-600 transition-colors duration-300">
        {post.title}
      </h2>
      {/* Optional excerpt below */}
      {/* <p className="text-sm text-gray-600 mt-2">{post.excerpt}</p> */}
    </Link>
  );
};

export default BannerList;
