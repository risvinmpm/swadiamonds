import React from "react";
import AutoTypingText from "../ui/AutoTypingText";

const Trend = () => {
  return (
    <section className="flex flex-col md:flex-row gap-4 md:gap-5 pt-6 pb-10 items-start md:items-center">
      <button
        type="button"
        className="bg-[#00464d] uppercase text-sm text-white font-semibold px-5 py-2 rounded-md"
      >
        Trending Now
      </button>
      <div className="text-base font-light flex items-center max-w-full">
        <AutoTypingText
          words={[
            "Where brilliance meets craftsmanship — discover your perfect sparkle.",
            "Timeless. Flawless. Yours.",
            "More than a gem, it’s a promise of forever.",
          ]}
          typeSpeed={50}
          pause={1300}
        />
      </div>
    </section>
  );
};

export default Trend;
