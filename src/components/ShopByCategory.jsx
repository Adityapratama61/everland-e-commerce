import shirtImg from "../assets/shop-category/shirt.jpg";
import denimImg from "../assets/shop-category/denim.jpg";
import teesImg from "../assets/shop-category/tees.jpg";
import pantsImg from "../assets/shop-category/pants.jpg";
import knitwearImg from "../assets/shop-category/knitwear.jpg";
import outerwearImg from "../assets/shop-category/outwear.jpg";

const categories = [
  {
    name: "Shirts",
    image: shirtImg,
  },
  {
    name: "Denim",
    image: denimImg,
  },
  {
    name: "Tees",
    image: teesImg,
  },
  {
    name: "Pants",
    image: pantsImg,
  },
  {
    name: "Knitwear",
    image: knitwearImg,
  },
  {
    name: "Outerwear",
    image: outerwearImg,
  },
];

const ShopByCategory = () => {
  return (
    <section className="px-8 py-12">
      <h2 className="text-center text-lg tracking-wider font-normal mb-7">
        Shop by Category
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {categories.map((cat) => (
          <a key={cat.name} href="#" className="group block">
            <div className="overflow-hidden aspect-[3/4] relative">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
            </div>
            <p className="text-center text-xs tracking-widest uppercase font-medium mt-2">
              {cat.name}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
