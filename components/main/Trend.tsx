import React from "react";
import AutoTypingText from "../ui/AutoTypingText";

const Trend = () => {
  return (
    <section className="flex gap-5 pt-7 pb-10">
      <button type="button" className="bg-[#00464d] uppercase text-sm text-white font-semibold px-5 py-2 rounded-md">Trending Now</button>
      <div className="text-base font-light flex items-center">
        <AutoTypingText
          words={[
            "Where brilliance meets craftsmanship — discover your perfect sparkle.",
            "Timeless. Flawless. Yours.",
            "More than a gem, it’s a promise of forever."
          ]}
          typeSpeed={50} // Faster typing
          pause={1300} // Short pause before switching
        />
      </div>
    </section>
  );
};

export default Trend;
