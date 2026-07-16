// v-reveal — fades/slides an element in the first time it enters the viewport.
// Usage: v-reveal  |  v-reveal="150" (delay in ms)
const observer =
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              obs.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      )
    : null;

export const reveal = {
  mounted(el, binding) {
    if (!observer) {
      return;
    }
    el.setAttribute("data-reveal", "");
    const delay = typeof binding.value === "number" ? binding.value : 0;
    if (delay) {
      el.style.setProperty("--reveal-delay", `${delay}ms`);
    }
    observer.observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
