"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

const delayClassNames: Record<number, string> = {
  100: "reveal-delay-100",
  150: "reveal-delay-150",
  200: "reveal-delay-200",
  300: "reveal-delay-300",
};

/**
 * Reveals content when it scrolls into view so the long landing page feels lighter and more staged.
 *
 * @param children - The content to animate into view.
 * @param className - Optional wrapper classes for layout or additional styling.
 * @param delayMs - Optional delay to stagger the reveal animation.
 * @returns A client-side wrapper that fades and lifts its children into view.
 */
export default function Reveal({ children, className = "", delayMs }: RevealProps) {
  // Observe the wrapper element so the animation only plays when the section enters the viewport.
  const ref = useRef<HTMLDivElement>(null);
  // Mark the element as visible once the observer fires so the CSS transition can run once.
  const [visible, setVisible] = useState(false);
  const delayClassName = delayMs ? delayClassNames[delayMs] ?? "" : "";

  useEffect(() => {
    // Abort early when the ref has not attached yet, which can happen during the first render pass.
    const node = ref.current;
    if (!node) return;

    // Use an IntersectionObserver instead of scroll listeners so the animation stays cheap.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Stop observing after the first reveal because the animation is intentionally one-shot.
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Start observing once the DOM node exists.
    observer.observe(node);
    // Clean up the observer if the component unmounts before it becomes visible.
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // Fade in and shift upward so each section enters with a subtle sense of depth.
      className={`transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      } ${delayClassName} ${className}`}
    >
      {children}
    </div>
  );
}
