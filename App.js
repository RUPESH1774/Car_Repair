  // Toggle Menu for Mobile
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Remove this line if you want it to re-trigger
      }
    });
  });

  document.querySelectorAll('.all_services img').forEach(img => {
    observer.observe(img);
  });

