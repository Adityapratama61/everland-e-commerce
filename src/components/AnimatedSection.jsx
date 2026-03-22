import useScrollAnimation from "../hooks/useScrollAnimation";

/**
 * AnimatedSection
 * Wrap any section with this to get scroll-triggered animations.
 *
 * @prop {string}  animation  - "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "zoom"
 * @prop {number}  delay      - delay in ms (default 0)
 * @prop {number}  duration   - duration in ms (default 600)
 * @prop {number}  threshold  - intersection threshold (default 0.15)
 * @prop {string}  className  - extra classes
 */
const animations = {
  "fade-up":    { hidden: "opacity-0 translate-y-10",  visible: "opacity-100 translate-y-0" },
  "fade-down":  { hidden: "opacity-0 -translate-y-10", visible: "opacity-100 translate-y-0" },
  "fade-left":  { hidden: "opacity-0 translate-x-10",  visible: "opacity-100 translate-x-0" },
  "fade-right": { hidden: "opacity-0 -translate-x-10", visible: "opacity-100 translate-x-0" },
  "fade":       { hidden: "opacity-0",                  visible: "opacity-100" },
  "zoom":       { hidden: "opacity-0 scale-95",         visible: "opacity-100 scale-100" },
};

const AnimatedSection = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });
  const anim = animations[animation] ?? animations["fade-up"];

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out ${anim.hidden} ${
        isVisible ? anim.visible : ""
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
