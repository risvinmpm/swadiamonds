import Navbar from "@/components/layout/Navbar";
import Banner from "@/components/layout/Banner";
import Trend from "@/components/main/Trend";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-padding">
        <Trend />
        <Banner />
        <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="mb-4">Check out the latest posts below.</p>
        <Link href="/blog" className="text-blue-600 underline">
          Go to Blog
        </Link>
      </main>
    </>
  );
}
