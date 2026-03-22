import { useRef } from "react";
import favorite1 from "../assets/favorite/fav-1.jpg";
import favorite2 from "../assets/favorite/fav-2.jpg";
import favorite3 from "../assets/favorite/fav-3.jpg";
import favorite4 from "../assets/favorite/fav-4.jpg";
import favorite5 from "../assets/favorite/fav-5.jpg";

const products = [
  {
    id: 1,
    name: "The Modern Overshirt",
    price: "$98",
    desc: "Long Sleeve Camo",
    image: favorite1,
  },
  {
    id: 2,
    name: "The Worker Jacket 2.0",
    price: "$168",
    desc: "Workers Jacket",
    image: favorite2,
  },
  {
    id: 3,
    name: "The Waffle Knit Turtleneck",
    price: "$78",
    desc: "Waffle Knit Set",
    image: favorite3,
  },
  {
    id: 4,
    name: "The Tailored Chino",
    price: "$68",
    desc: "Tailored Fit Pants",
    image: favorite4,
  },
  {
    id: 5,
    name: "The Heavyweight Tee",
    price: "$35",
    desc: "Heavyweight Cotton",
    image: favorite5,
  },
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

const ProductCarousel = ({ title, subtitle }) => {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 240, behavior: "smooth" });
    }
  };

  return (
    <section className="px-8 py-12">
      {title && (
        <h2 className="text-center text-lg tracking-wider font-normal mb-1">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-center text-sm text-gray-500 mb-7">{subtitle}</p>
      )}

      <div className="relative">
        {/* Prev Button */}
        <button
          onClick={() => scroll(-1)}
          className="absolute left-[-18px] top-[38%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition"
          aria-label="Previous">
          <ChevronLeft />
        </button>

        {/* Scrollable Row */}
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-3"
          style={{ scrollbarWidth: "none" }}>
          {products.map((product) => (
            <a
              key={product.id}
              href="#"
              className="group min-w-[220px] flex-shrink-0 block">
              <div className="overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs font-medium mt-2">{product.name}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                {product.price} – {product.desc}
              </p>
            </a>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-[-18px] top-[38%] -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm hover:bg-gray-50 transition"
          aria-label="Next">
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
