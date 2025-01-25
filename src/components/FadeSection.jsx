/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export const FadeInSection = ({ children }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 1 });

  return (
    <span
      ref={ref}
      className={`fade-section ${isIntersecting ? "fade-in" : "fade-out"}`}
    >
      {children}
    </span>
  );
};
