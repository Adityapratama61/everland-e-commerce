import { useRef } from "react";
import community1 from "../assets/community/com-1.jpg";
import community2 from "../assets/community/com-2.jpg";
import community3 from "../assets/community/com-3.jpg";
import community4 from "../assets/community/com-4.jpg";
import community5 from "../assets/community/com-5.jpg";

const communityImages = [
  community1,
  community2,
  community3,
  community4,
  community5,
];

const ChevronLeft = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const CommunitySection = () => {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 200, behavior: "smooth" });
    }
  };

  return (
    <section className="px-8 py-12">
      <h2 className="text-center text-lg tracking-wider font-normal mb-1">
        Everlane On You
      </h2>
      <p className="text-center text-sm text-gray-500 mb-3">
        Share your look with us @everlane to be featured.
      </p>
      <a
        href="#"
        className="block text-center text-xs tracking-widest uppercase underline text-gray-900 mb-6 hover:text-gray-500 transition-colors">
        Add Your Photo
      </a>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition"
          aria-label="Previous">
          <ChevronLeft />
        </button>

        <div
          ref={rowRef}
          className="flex gap-2 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none" }}>
          {communityImages.map((src, i) => (
            <a key={i} href="#" className="flex-shrink-0">
              <img
                src={src}
                alt={`Community photo ${i + 1}`}
                className="w-44 h-56 object-cover hover:opacity-90 transition-opacity"
              />
            </a>
          ))}
        </div>

        <button
          onClick={() => scroll(1)}
          className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition"
          aria-label="Next">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default CommunitySection;
