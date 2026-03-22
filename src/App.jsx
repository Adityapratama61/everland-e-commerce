import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopByCategory from "./components/ShopByCategory";
import EditorialGrid from "./components/EditorialGrid";
import MissionBanner from "./components/MissionBanner";
import ProductCarousel from "./components/ProductCarousel";
import Testimonial from "./components/Testimonial";
import BlogSection from "./components/BlogSection";
import CommunitySection from "./components/CommunitySection";
import TrustIcons from "./components/TrustIcons";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";

const Divider = () => <hr className="border-t border-gray-200 mx-8" />;

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Static — always visible */}
      <AnnouncementBar />
      <Navbar />

      {/* Hero: fade in from below */}
      <AnimatedSection animation="fade-up" duration={800}>
        <Hero />
      </AnimatedSection>

      {/* Shop by Category: fade up with slight delay */}
      <AnimatedSection animation="fade-up" duration={700} delay={50}>
        <ShopByCategory />
      </AnimatedSection>

      <Divider />

      {/* Editorial Grid: zoom in */}
      <AnimatedSection animation="zoom" duration={700}>
        <EditorialGrid />
      </AnimatedSection>

      {/* Mission Banner: fade from left */}
      <AnimatedSection animation="fade-left" duration={700}>
        <MissionBanner />
      </AnimatedSection>

      {/* Product Carousel: fade up */}
      <AnimatedSection animation="fade-up" duration={700}>
        <ProductCarousel
          title="Everlane Favorites"
          subtitle="Rooted in Everlane. Responsibly-designed. Consciously crafted."
        />
      </AnimatedSection>

      <Divider />

      {/* Testimonial: fade from right */}
      <AnimatedSection animation="fade-right" duration={700}>
        <Testimonial />
      </AnimatedSection>

      <Divider />

      {/* Blog: fade up */}
      <AnimatedSection animation="fade-up" duration={700} delay={50}>
        <BlogSection />
      </AnimatedSection>

      <Divider />

      {/* Community: fade up */}
      <AnimatedSection animation="fade-up" duration={700}>
        <CommunitySection />
      </AnimatedSection>

      {/* Trust Icons: zoom */}
      <AnimatedSection animation="zoom" duration={600} threshold={0.2}>
        <TrustIcons />
      </AnimatedSection>

      {/* Footer: fade up */}
      <AnimatedSection animation="fade-up" duration={600}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}

export default App;
