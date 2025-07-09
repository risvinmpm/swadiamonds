import { StaticImageData } from "next/image";
import collection_2 from "@/public/collection_2.avif";
import img_9 from "@/public/img_9.jpg";
import img_6 from "@/public/img_6.jpg";
import img_7 from "@/public/img_7.jpg";

export interface WhatsNewItem {
  image: StaticImageData;
  text: string;
}

export const whatsNewItems: WhatsNewItem[] = [
  {
    image: collection_2,
    text: "A brighter reason to visit us today! New treasures are waiting for you. Don't miss this!"
  },
  {
    image: img_9,
    text: "New treasures are waiting for you."
  },
  {
    image: img_6,
    text: "Shine alert: You don't want to miss this!"
  },
  {
    image: img_7,
    text: "New diamond collection just arrived – come shine!"
  }
];
