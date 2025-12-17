(function () {
  const toggle = document.querySelector(".nav-toggle");
  const overlay = document.querySelector(".nav-overlay");
  const nav = document.getElementById("primary-nav");

  if (!toggle || !overlay || !nav) return;

  const open = () => {
    document.body.classList.add("nav-open");
    overlay.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    document.body.classList.remove("nav-open");
    overlay.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    document.body.classList.contains("nav-open") ? close() : open();
  });

  overlay.addEventListener("click", close);

  nav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  // Active link auto-highlight
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  nav.querySelectorAll("a").forEach((a) => {
    const href = (a.getAttribute("href") || "").split("#")[0].toLowerCase();
    if (href && href === current) a.classList.add("active");
  });
})();
