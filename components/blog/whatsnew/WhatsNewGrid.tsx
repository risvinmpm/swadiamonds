import Image from "next/image";
import { WhatsNewItem } from "@/lib/whatsNewItems";

interface Props {
  items: WhatsNewItem[];
}

const WhatsNewGrid = ({ items }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
      {items.map((item, index) => (
        <div key={index} className="relative group rounded-md shadow-md">
          <Image
            src={item.image}
            alt={`whats-new-${index}`}
            width={400}
            height={300}
            className="w-full h-[300px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 bg-white px-4 py-7 rounded-md shadow-md transition-transform duration-300 group-hover:translate-y-2 max-w-[85%]">
            <p className="text-lg leading-snug font-semibold">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatsNewGrid;
