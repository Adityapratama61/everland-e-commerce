const Testimonial = () => {
  return (
    <section className="px-8 pb-12">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Text Side */}
        <div className="p-10">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-3">
            People Are Talking
          </p>
          <div className="text-yellow-400 text-lg mb-3">★★★★★</div>
          <blockquote className="font-serif text-xl italic leading-relaxed text-gray-900 mb-4">
            "Love this shirt! Fits perfectly and the fabric is thick without being stiff."
          </blockquote>
          <cite className="not-italic text-xs text-gray-500">
            HUNTER S. –{" "}
            <a href="#" className="underline text-gray-600 hover:text-gray-900">
              The Independent Overshirt
            </a>
          </cite>
        </div>

        {/* Image Side */}
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=600&q=80&fit=crop"
            alt="Customer testimonial"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
