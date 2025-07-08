import { StaticImageData } from "next/image";
import collection_1 from "../public/collection_1.png";
import collection_2 from "../public/collection_2.avif";
import collection_3 from "../public/collection_3.jpg";

export interface BlogPost {
  alt: string;
  slug: string;
  title: string;
  excerpt: string;
  image: StaticImageData;
  content: string;
  content2: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "shine-with-diamonds",
    title: "New diamond collection just arrived – come shine!",
    excerpt:
      "Explore the sparkling new trends in our diamond collection this season.",
    image: collection_1,
    content: `## Shine with Diamonds

Welcome to the radiant world of diamonds. In this post, we explore how our newest collection is crafted to inspire and impress. Whether it's elegance or luxury, there's a perfect piece waiting for you.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus repellat alias omnis eaque repellendus. Doloremque ipsum, modi eveniet omnis, maiores, magni quia reiciendis expedita dolor enim dolore consectetur amet!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus repellat alias omnis eaque repellendus. Doloremque ipsum, modi eveniet omnis, maiores, magni quia reiciendis expedita dolor enim dolore consectetur amet!`,
    content2: `## Diamond Maintenance Tips

Caring for your diamond is just as important as choosing the right one. Learn best practices to keep your jewel shining year-round.

Use mild soap, a soft brush, and store your diamonds separately to avoid scratches.`
  },
  {
    slug: "how-to-choose-right-diamond",
    title: "Find the Perfect Diamond for Your Style",
    excerpt:
      "From cut to clarity, learn how to select a diamond that fits your style.",
    image: collection_2,
    content: `## How to Choose the Right Diamond

Diamonds come in many forms, and making the right choice requires knowledge. This article guides you through the 4Cs: Cut, Color, Clarity, and Carat.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus repellat alias omnis eaque repellendus.`,
    content2: `## Understanding Diamond Shapes

Round, princess, cushion – each diamond shape tells a different story. Learn what shape suits your personality and the symbolism behind it.`
  },
  {
    slug: "how-to-choose-right-diamonds",
    title: "Everything You Need to Know About Diamonds",
    excerpt:
      "From cut to clarity, learn how to select a diamond that fits your style.",
    image: collection_3,
    content: `## How to Choose the Right Diamond

This article guides you through the 4Cs: Cut, Color, Clarity, and Carat. Understand how to evaluate a diamond’s brilliance and beauty.`,
    content2: `## Caring for Your Investment

Proper cleaning and storage will ensure your diamond shines for generations. Avoid harsh chemicals and keep each piece in its own pouch or box.`
  }
];
