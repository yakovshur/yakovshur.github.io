// const myWorkLink = document.getElementById('my-work-link');
// const ucsbProjects = document.getElementById('ucsb-projects');

// if (myWorkLink && ucsbProjects) {
//   myWorkLink.addEventListener('click', (e) => {
//     e.preventDefault(); // stop default anchor jump
//     ucsbProjects.scrollIntoView({ behavior: "smooth" });
//   });
// }


document.querySelectorAll('.submenu-title').forEach(link => {
  let tappedOnce = false;

  link.addEventListener('click', e => {
    if (!tappedOnce) {
      e.preventDefault(); // stop navigation
      tappedOnce = true;

      setTimeout(() => tappedOnce = false, 500);
    }
  });
});