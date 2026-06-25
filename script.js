const navLinks = [...document.querySelectorAll("[data-nav]")];
const sections = navLinks
  .map((link) => document.getElementById(link.dataset.nav))
  .filter(Boolean);

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.nav === id);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

    if (visible[0]) {
      setActive(visible[0].target.id);
    }
  },
  { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
);

sections.forEach((section) => observer.observe(section));
setActive(location.hash.slice(1) || "about");

document.getElementById("year").textContent = new Date().getFullYear();
