import React from "react";
import { blogPosts } from "@/lib/blogData";
import BannerList from "./BannerList";

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <BannerList key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
