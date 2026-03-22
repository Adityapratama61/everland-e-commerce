import image1 from "../assets/blog-img/img-1.jpg";
import image2 from "../assets/blog-img/img-2.jpg";

const posts = [
  {
    id: 1,
    title: "Our Holiday Gift Picks",
    description:
      "The pieces to give everyone on your list — from cozy layers to everyday essentials.",
    image: image1,
    cta: "Read More",
  },
  {
    id: 2,
    title: "Cleaner Fashion",
    description:
      "See the sustainability criteria at the heart of all our products and how we choose every material.",
    image: image2,
    cta: "Learn More",
  },
];

const BlogSection = () => {
  return (
    <section className="px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="group">
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-base mt-4 mb-1.5">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-3">
              {post.description}
            </p>
            <a
              href="#"
              className="text-xs tracking-widest uppercase underline text-gray-900 hover:text-gray-500 transition-colors">
              {post.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
