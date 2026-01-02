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
  if (!isTouch) return;

  const dropdown = document.querySelector(".dropdown");
  const homeLink = dropdown.querySelector(".nav-title-link");

  /* HOME LINK:
     - First tap opens menu
     - Second tap navigates */
  homeLink.addEventListener("click", (e) => {
    if (!dropdown.classList.contains("open")) {
      e.preventDefault();
      dropdown.classList.add("open");
    }
    // else: allow navigation normally
  });

  /* SUBMENUS:
     - First tap opens submenu
     - Second tap navigates */
  document.querySelectorAll(".submenu-title").forEach(title => {
    const parent = title.parentElement;

    title.addEventListener("click", (e) => {
      if (!parent.classList.contains("open")) {
        e.preventDefault();
        parent.classList.add("open");
      }
      // else: allow navigation
    });
  });

  /* Tap outside closes everything */
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdown.classList.remove("open");
      document.querySelectorAll(".submenu").forEach(s => s.classList.remove("open"));
    }
  });
});
