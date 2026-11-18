
/* ==================================
   IFPCBI ACADEMY - JAVASCRIPT
================================== */

// Animation d'apparition des sections

document.addEventListener("DOMContentLoaded", function () {

  // Année automatique dans le pied de page
  const footer = document.querySelector("footer");

  if (footer) {
    footer.innerHTML = footer.innerHTML.replace(
      /© 2026/,
      "© " + new Date().getFullYear()
    );
  }

  // Confirmation du clic sur les liens de formation
  const formationLinks = document.querySelectorAll(
    ".formation-card a"
  );

  formationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("Demande d'information sur une formation IFPCBI.");
    });
  });

  // Défilement fluide
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
