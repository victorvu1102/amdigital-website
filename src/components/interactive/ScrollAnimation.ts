export function initScrollAnimation() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!items.length || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(item => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: .12 });
  items.forEach(item => observer.observe(item));
}
