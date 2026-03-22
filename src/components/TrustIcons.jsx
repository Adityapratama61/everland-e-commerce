const trustItems = [
  {
    icon: "📦",
    title: "Transparent Shipping",
    description: "Enjoy free shipping on U.S. orders made over $200.",
  },
  {
    icon: "👕",
    title: "Conscientiously Crafted",
    description: "Designed with the planet in mind.",
  },
  {
    icon: "📍",
    title: "Come Say Hi",
    description: "We have over 10 retail stores across the U.S.",
  },
];

const TrustIcons = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 px-8 py-10 border-t border-b border-gray-200">
      {trustItems.map((item) => (
        <div key={item.title} className="text-center max-w-[180px]">
          <div className="text-3xl mb-2.5">{item.icon}</div>
          <h4 className="text-xs font-semibold tracking-wider uppercase mb-1.5">
            {item.title}
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TrustIcons;
