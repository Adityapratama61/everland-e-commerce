import cleanupImage from "../assets/clean-up.jpg";

const MissionBanner = () => {
  return (
    <div
      className="relative w-full py-16 px-8 text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url(${cleanupImage})`,
      }}>
      <div className="absolute inset-0 bg-[#3d4a3e]/70" />
      <div className="relative z-10">
        <h2 className="font-serif text-3xl mb-3">
          We're on a Mission To Clean Up the Industry
        </h2>
        <p className="text-sm opacity-85 max-w-md mx-auto mb-6 leading-relaxed">
          From fiber to your door — we believe in radical transparency in
          everything we do.
        </p>
        <a
          href="#"
          className="inline-block border border-white text-white px-7 py-2.5 text-xs tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors duration-200">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default MissionBanner;
