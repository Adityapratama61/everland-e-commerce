const categories = [
  "Women's Gifting",
  "New Arrivals",
  "Best Sellers",
  "Clothing",
  "Tights & Leggings",
  "Pants & Jeans",
  "Swimwear",
  "Dresses & Bags",
  "Sale",
];

const CategoryNav = () => {
  return (
    <div className="hidden md:flex items-center justify-center gap-6 px-4 py-2.5 border-b border-gray-200 bg-white overflow-x-auto">
      {categories.map((cat) => (
        <a
          key={cat}
          href="#"
          className="text-xs tracking-wider uppercase whitespace-nowrap text-gray-900 hover:underline transition"
        >
          {cat}
        </a>
      ))}
    </div>
  );
};

export default CategoryNav;
