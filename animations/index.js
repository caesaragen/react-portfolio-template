import gsap, { Power3 } from "gsap";

let scrollTriggerRegistered = false;

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const stagger = (target, fromvVars, toVars) => {
  return gsap.fromTo(
    target,
    { opacity: 0, ...fromvVars },
    { opacity: 1, ...toVars, stagger: 0.2, ease: Power3.easeOut }
  );
};

const ensureScrollTrigger = async () => {
  if (scrollTriggerRegistered) return;
  const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  scrollTriggerRegistered = true;
};

// Fades + slides a group of elements in together as `triggerEl` scrolls
// into view. One reusable "reveal" moment, reused across sections rather
// than each one getting its own bespoke effect.
export const revealOnScroll = async (triggerEl, targets, { y = 24, staggerAmount = 0.12 } = {}) => {
  if (typeof window === "undefined" || !triggerEl || !targets) return;

  const elements = (Array.isArray(targets) ? targets : [targets]).filter(Boolean);
  if (!elements.length) return;

  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  await ensureScrollTrigger();

  gsap.fromTo(
    elements,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: Power3.easeOut,
      stagger: staggerAmount,
      scrollTrigger: {
        trigger: triggerEl,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
};
