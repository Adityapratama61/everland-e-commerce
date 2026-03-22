import { useState } from "react";

// ── Icons ──────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);
const UserIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const BagIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);
const ArrowRight = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

// ── Mega Menu Data ─────────────────────────────────────────────────────────
const megaMenuData = {
  Women: {
    highlights: [
      "Shop All New Arrivals",
      "The Gift Guide",
      "New Bottoms",
      "New Tops",
      "T-Shirt Bundles",
      "Under $100",
    ],
    featuredShops: [
      "The Holiday Outfit Edit",
      "Giftable Sweaters",
      "Uniform & Capsule",
      "The Performance Chino Shop",
      "Top Rated Women's Clothing",
    ],
    cards: [
      {
        title: "The Holiday\nOutfit Edit",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80&fit=crop",
      },
      {
        title: "Giftable\nSweaters",
        image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&q=80&fit=crop",
      },
    ],
  },
  Men: {
    highlights: [
      "Shop All New Arrivals",
      "The Gift Guide",
      "New Bottoms",
      "New Tops",
      "T-Shirt Bundles",
      "Under $100",
    ],
    featuredShops: [
      "The Holiday Outfit Edit",
      "Giftable Sweaters",
      "Uniform & Capsule",
      "The Performance Chino Shop",
      "Top Rated Men's Clothing",
    ],
    cards: [
      {
        title: "The Holiday\nOutfit Edit",
        image: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&q=80&fit=crop",
      },
      {
        title: "Giftable\nSweaters",
        image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80&fit=crop",
      },
    ],
  },
  About: {
    highlights: [
      "Our Story",
      "Radical Transparency",
      "Human Rights",
      "Environment",
      "Factories",
    ],
    featuredShops: [
      "The Everlane Promise",
      "ReNew Collection",
      "Clean Silk Project",
      "Tread by Everlane",
    ],
    cards: [
      {
        title: "Our\nMission",
        image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&q=80&fit=crop",
      },
      {
        title: "Cleaner\nFashion",
        image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&q=80&fit=crop",
      },
    ],
  },
  "Everworld Stories": {
    highlights: [
      "Latest Stories",
      "Style Guides",
      "Behind the Scenes",
      "Sustainability",
      "Community",
    ],
    featuredShops: [
      "How It's Made",
      "Factory Visits",
      "Designer Notes",
      "Customer Stories",
    ],
    cards: [
      {
        title: "Behind\nthe Brand",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80&fit=crop",
      },
      {
        title: "Style\nGuides",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80&fit=crop",
      },
    ],
  },
};

const navLinks = ["Women", "Men", "About", "Everworld Stories"];

const categoryLinks = [
  { label: "Holiday Gifting", red: false },
  { label: "New Arrivals", red: false },
  { label: "Best-Sellers", red: false },
  { label: "Clothing", red: false },
  { label: "Tops & Sweaters", red: false },
  { label: "Pants & Jeans", red: false },
  { label: "Outerwear", red: false },
  { label: "Shoes & Bags", red: false },
  { label: "Sale", red: true },
];

// ── Mega Menu Panel ────────────────────────────────────────────────────────
const MegaMenu = ({ data }) => (
  <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 animate-fadeIn">
    <div className="max-w-5xl mx-auto px-8 py-8 grid grid-cols-[1fr_1fr_auto] gap-10">
      {/* Highlights */}
      <div>
        <p className="text-[10px] font-semibold tracking-[.15em] uppercase text-gray-400 mb-4">
          Highlights
        </p>
        <ul className="space-y-3">
          {data.highlights.map((item) => (
            <li key={item}>
              <a href="#" className="text-sm text-gray-900 hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Featured Shops */}
      <div>
        <p className="text-[10px] font-semibold tracking-[.15em] uppercase text-gray-400 mb-4">
          Featured Shops
        </p>
        <ul className="space-y-3">
          {data.featuredShops.map((item) => (
            <li key={item}>
              <a href="#" className="text-sm text-gray-900 hover:underline">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Feature Cards */}
      <div className="flex gap-3">
        {data.cards.map((card) => (
          <a
            key={card.title}
            href="#"
            className="group relative w-[190px] h-[220px] overflow-hidden flex-shrink-0 block"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex items-end justify-between gap-2">
              <p className="font-serif text-[15px] leading-snug font-semibold whitespace-pre-line">
                {card.title}
              </p>
              <ArrowRight />
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
);

// ── Navbar ─────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="sticky top-0 z-50 bg-white"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* ── Main Bar ── */}
      <nav className="relative border-b border-gray-200">
        <div className="flex items-center justify-between px-8 h-14">

          {/* Left: nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link}
                onMouseEnter={() => setActiveMenu(link)}
                className="relative text-xs tracking-widest uppercase font-medium text-gray-900 hover:text-gray-500 transition pb-1 group"
              >
                {link}
                {/* Active underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-gray-900 transition-all duration-200 ${
                    activeMenu === link ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          {/* Center: logo */}
          <span className="absolute left-1/2 -translate-x-1/2 font-serif text-[22px] tracking-[.18em] font-normal select-none pointer-events-none">
            EVERLANE
          </span>

          {/* Right: icons */}
          <div className="flex items-center gap-5 text-gray-900">
            <button aria-label="Search" className="hover:opacity-60 transition-opacity">
              <SearchIcon />
            </button>
            <button aria-label="Account" className="hover:opacity-60 transition-opacity">
              <UserIcon />
            </button>
            <button aria-label="Bag" className="hover:opacity-60 transition-opacity relative">
              <BagIcon />
              <span className="absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center leading-none">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mega menu dropdown */}
        {activeMenu && megaMenuData[activeMenu] && (
          <MegaMenu data={megaMenuData[activeMenu]} />
        )}
      </nav>

      {/* ── Category Sub-Nav ── */}
      <div
        className="hidden md:flex items-center justify-center gap-6 px-4 py-2.5 border-b border-gray-200 bg-white overflow-x-auto"
        onMouseEnter={() => setActiveMenu(null)}
      >
        {categoryLinks.map(({ label, red }) => (
          <a
            key={label}
            href="#"
            className={`text-xs tracking-wider uppercase whitespace-nowrap hover:underline transition font-medium ${
              red ? "text-red-500" : "text-gray-900"
            }`}
          >
            {label}
          </a>
        ))}
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs tracking-widest uppercase font-medium text-gray-900"
            >
              {link}
            </a>
          ))}
          <hr className="border-gray-200" />
          {categoryLinks.map(({ label, red }) => (
            <a
              key={label}
              href="#"
              className={`text-xs tracking-wider uppercase ${red ? "text-red-500" : "text-gray-700"}`}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
