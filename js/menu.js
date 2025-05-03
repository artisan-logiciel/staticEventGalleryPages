// Script pour le menu responsive
document.addEventListener("DOMContentLoaded", () => {
  // Ajouter la classe 'scrolled' au menu lors du défilement
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Fermer le menu mobile après un clic sur un lien
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        })
        bsCollapse.hide()
      }
    })
  })

  // Mettre à jour le lien actif en fonction de la page courante
  const currentPage = window.location.pathname.split("/").pop() || "index.html"

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage) {
      link.classList.add("active")
    }
  })

  // Animation du logo au survol
  const navbarBrand = document.querySelector(".navbar-brand")

  navbarBrand.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)"
  })

  navbarBrand.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"
  })
})
