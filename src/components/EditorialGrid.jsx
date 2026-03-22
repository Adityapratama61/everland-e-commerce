import newarriveImg from "../assets/editorial/new-arrive.jpg";
import bestSellerImg from "../assets/editorial/best-seller.jpg";
import holidayImg from "../assets/editorial/holiday.jpg";

const editorials = [
  {
    title: "New Arrivals",
    cta: "Shop The Latest",
    image: newarriveImg,
  },
  {
    title: "Best-Sellers",
    cta: "Shop Your Favorites",
    image: bestSellerImg,
  },
  {
    title: "The Holiday Outfit",
    cta: "Shop Your Look",
    image: holidayImg,
  },
];

const EditorialGrid = () => {
  return (
    <section className="px-8 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {editorials.map((item) => (
          <a
            key={item.title}
            href="#"
            className="group relative block overflow-hidden aspect-[4/5]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
              <span className="text-xs tracking-widest uppercase border-b border-white pb-0.5">
                {item.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EditorialGrid;
