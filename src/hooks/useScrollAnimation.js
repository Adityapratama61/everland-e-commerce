import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation
 * Returns a ref to attach to any element + a boolean `isVisible`.
 *
 * @param {Object} options
 * @param {number} options.threshold  - 0–1, how much of the element must be visible (default 0.15)
 * @param {string} options.rootMargin - margin around root (default "0px")
 * @param {boolean} options.once     - only trigger once (default true)
 */
const useScrollAnimation = ({
  threshold = 0.15,
  rootMargin = "0px",
  once = true,
} = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
};

export default useScrollAnimation;
