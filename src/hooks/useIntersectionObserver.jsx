import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = "0%",
}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [root, rootMargin, threshold]);

  return [ref, isIntersecting];
};
