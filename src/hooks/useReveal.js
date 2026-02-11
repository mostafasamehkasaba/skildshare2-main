import { useEffect, useRef } from "react";

export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) el.classList.add("is-revealed");
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return ref;
}
