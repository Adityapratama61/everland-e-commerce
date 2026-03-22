import bgImage from "../assets/bg.jpg";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[560px] flex items-end p-12 bg-cover"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center 30%",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-sm text-white">
        <h1 className="font-serif text-5xl leading-tight mb-3">
          Your Cozy Era
        </h1>
        <div className="inline-block border border-white/60 bg-white/20 text-white text-xs tracking-widest uppercase px-3 py-1 mb-3">
          ✦ Warm up your wardrobe
        </div>
        <p className="text-sm mb-5 opacity-90 leading-relaxed">
          with new winter essentials
        </p>
        <a
          href="#"
          className="inline-block border border-white text-white px-7 py-2.5 text-xs tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors duration-200">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
