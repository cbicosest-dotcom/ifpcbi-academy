
/* ==========================================
   IFPCBI ACADEMY
   JAVASCRIPT OPTIMISE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

  "use strict";

  /* 1. ANNEE AUTOMATIQUE DU FOOTER */

  const footer = document.querySelector("footer");

  if (footer) {
    const currentYear = new Date().getFullYear();

    footer.innerHTML = footer.innerHTML.replace(
      /©\s*\d{4}/,
      "© " + currentYear
    );
  }

  /* 2. NAVIGATION INTERNE */

  const internalLinks = document.querySelectorAll(
    'a[href^="#"]'
  );

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const href = link.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      let target;

      try {
        target = document.querySelector(href);
      } catch (error) {
        return;
      }

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });

      /* Mise à jour de l'adresse dans le navigateur */

      if (history.pushState) {
        history.pushState(null, "", href);
      }

    });

  });

  /* 3. LIENS DES FORMATIONS */

  const formationLinks = document.querySelectorAll(
    ".formation-card a"
  );

  formationLinks.forEach(function (link) {

    link.setAttribute(
      "aria-label",
      link.textContent.trim() + " - IFPCBI Academy"
    );

  });

  /* 4. LIENS WHATSAPP */

  const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"]'
  );

  whatsappLinks.forEach(function (link) {

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

  });

  /* 5. VERIFICATION DES IMAGES */

  const images = document.querySelectorAll("img");

  images.forEach(function (img) {

    if (!img.hasAttribute("alt")) {
      img.setAttribute("alt", "Image IFPCBI Academy");
    }

    if (
      !img.hasAttribute("loading") &&
      !img.closest(".hero")
    ) {
      img.setAttribute("loading", "lazy");
    }

    if (!img.hasAttribute("decoding")) {
      img.setAttribute("decoding", "async");
    }

  });

  /* 6. ANNEE ET NAVIGATION : FIN */

  console.log("IFPCBI Academy : site initialisé.");

});
