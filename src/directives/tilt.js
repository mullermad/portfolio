// v-tilt — subtle 3D tilt following the cursor. Usage: v-tilt or v-tilt="6" (max degrees).
export const tilt = {
  mounted(el, binding) {
    const max = typeof binding.value === "number" ? binding.value : 8;

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transition = "transform 120ms ease-out";
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
    };

    const leave = () => {
      el.style.transition = "transform 450ms ease";
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    };

    el.__tiltMove = move;
    el.__tiltLeave = leave;
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
  },
  unmounted(el) {
    el.removeEventListener("mousemove", el.__tiltMove);
    el.removeEventListener("mouseleave", el.__tiltLeave);
  },
};
