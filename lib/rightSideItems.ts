import { StaticImageData } from "next/image";
import img_1 from "../public/img_1.jpg";
import img_2 from "../public/img_2.jpg";
import img_3 from "../public/img_3.jpg";
import img_4 from "../public/img_4.jpg";
import img_5 from "../public/img_5.jpg";


export interface RightSideItem {
  image: StaticImageData;
  alt?: string;
  slug: string;
  title: string;
  content: string;
  content2?: string;
}

export const rightSideItems: RightSideItem[] = [
  {
    image: img_1,
    alt: "Diamond Ad 1",
    slug: "Diamonds",
    title: "Diamonds just got more dazzling – visit us now!",
    content: `
## Shine With Confidence

Explore our new collection of radiant diamonds. Whether it's for love, celebration, or self-expression, our expertly cut diamonds bring unmatched elegance.

Every piece tells a story — yours.`,
    content2: `
## Why Buy From Us?

- Hand-picked for brilliance
- Certified conflict-free
- Lifetime warranty
- Custom design available
`,
  },
  {
    image: img_2,
    alt: "Diamond Ad 2",
    slug: "Diamonds2",
    title: "Something beautiful has just arrived.",
    content: `
## Shine With Confidence

Explore our new collection of radiant diamonds. Whether it's for love, celebration, or self-expression, our expertly cut diamonds bring unmatched elegance.

Every piece tells a story — yours.`,
    content2: `
## Why Buy From Us?

- Hand-picked for brilliance
- Certified conflict-free
- Lifetime warranty
- Custom design available
`,
  },
  {
    image: img_3,
    alt: "Diamond Ad 3",
    slug: "Diamonds3",
    title: "New arrivals. Endless sparkle.",
    content: `
## Shine With Confidence

Explore our new collection of radiant diamonds. Whether it's for love, celebration, or self-expression, our expertly cut diamonds bring unmatched elegance.

Every piece tells a story — yours.`,
    content2: `
## Why Buy From Us?

- Hand-picked for brilliance
- Certified conflict-free
- Lifetime warranty
- Custom design available
`,
  },
  {
    image: img_4,
    alt: "Diamond Ad 4",
    slug: "Diamonds4",
    title: "The shine you love is back!",
    content: `
## Shine With Confidence

Explore our new collection of radiant diamonds. Whether it's for love, celebration, or self-expression, our expertly cut diamonds bring unmatched elegance.

Every piece tells a story — yours.`,
    content2: `
## Why Buy From Us?

- Hand-picked for brilliance
- Certified conflict-free
- Lifetime warranty
- Custom design available
`,
  },
  {
    image: img_5,
    alt: "Diamond Ad 5",
    slug: "Diamonds5",
    title: "A brighter reason to visit us today!",
    content: `
## Shine With Confidence

Explore our new collection of radiant diamonds. Whether it's for love, celebration, or self-expression, our expertly cut diamonds bring unmatched elegance.

Every piece tells a story — yours.`,
    content2: `
## Why Buy From Us?

- Hand-picked for brilliance
- Certified conflict-free
- Lifetime warranty
- Custom design available
`,
  },
];
