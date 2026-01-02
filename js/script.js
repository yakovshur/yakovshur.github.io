// const myWorkLink = document.getElementById('my-work-link');
// const ucsbProjects = document.getElementById('ucsb-projects');

// if (myWorkLink && ucsbProjects) {
//   myWorkLink.addEventListener('click', (e) => {
//     e.preventDefault(); // stop default anchor jump
//     ucsbProjects.scrollIntoView({ behavior: "smooth" });
//   });
// }


document.addEventListener("DOMContentLoaded", () => {
  const isTouch = window.matchMedia("(hover: none)").matches;

  if (!isTouch) return; // desktop uses CSS hover only

  const dropdown = document.querySelector(".dropdown");
  const homeLink = dropdown.querySelector(".nav-title-link");

  /* Toggle main dropdown */
  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });

  /* Toggle submenus */
  document.querySelectorAll(".submenu-title").forEach(title => {
    title.addEventListener("click", (e) => {
      e.preventDefault();
      title.parentElement.classList.toggle("open");
    });
  });

  /* Close menus when tapping outside */
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdown.classList.remove("open");
      document.querySelectorAll(".submenu").forEach(s => s.classList.remove("open"));
    }
  });
});
