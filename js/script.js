// Script principal pour le site Street Art Festival

document.addEventListener("DOMContentLoaded", () => {
  // Animation des cartes d'événements
  const eventCards = document.querySelectorAll(".event-card")
  eventCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)"
      card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)"
      card.style.transition = "all 0.3s ease"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)"
      card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)"
    })
  })

  // Animation des cartes d'artistes
  const artistCards = document.querySelectorAll(".artist-card")
  artistCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)"
      card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)"
      card.style.transition = "all 0.3s ease"
    })

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)"
      card.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.05)"
    })
  })

  // Filtrage des artistes (pour la page artists.html)
  const filterButtons = document.querySelectorAll(".filter-btn")
  const artistItems = document.querySelectorAll(".artist-item")

  if (filterButtons.length > 0 && artistItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Retirer la classe active de tous les boutons
        filterButtons.forEach((btn) => btn.classList.remove("active"))

        // Ajouter la classe active au bouton cliqué
        button.classList.add("active")

        // Récupérer la catégorie à filtrer
        const filterValue = button.getAttribute("data-filter")

        // Filtrer les artistes
        artistItems.forEach((item) => {
          if (filterValue === "all") {
            item.style.display = "block"
          } else {
            if (item.getAttribute("data-category") === filterValue) {
              item.style.display = "block"
            } else {
              item.style.display = "none"
            }
          }
        })
      })
    })
  }

  // Gestion du formulaire de contact (pour la page contact.html)
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simuler l'envoi du formulaire
      const submitButton = this.querySelector('button[type="submit"]')
      const originalText = submitButton.innerHTML

      submitButton.disabled = true
      submitButton.innerHTML =
        '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Envoi en cours...'

      // Simuler un délai d'envoi
      setTimeout(() => {
        // Créer une alerte de succès
        const alertDiv = document.createElement("div")
        alertDiv.className = "alert alert-success mt-3"
        alertDiv.role = "alert"
        alertDiv.innerHTML = "Votre message a été envoyé avec succès! Nous vous répondrons dans les plus brefs délais."

        // Insérer l'alerte avant le bouton
        contactForm.appendChild(alertDiv)

        // Réinitialiser le bouton
        submitButton.disabled = false
        submitButton.innerHTML = originalText

        // Réinitialiser le formulaire
        contactForm.reset()

        // Faire disparaître l'alerte après 5 secondes
        setTimeout(() => {
          alertDiv.style.transition = "opacity 1s ease"
          alertDiv.style.opacity = "0"
          setTimeout(() => alertDiv.remove(), 1000)
        }, 5000)
      }, 1500)
    })
  }

  // Gestion des onglets d'événements (pour la page events.html)
  const eventsTabs = document.getElementById("eventsTab")
  if (eventsTabs) {
    const tabButtons = eventsTabs.querySelectorAll("button")
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
      })
    })
  }
})
