window.addEventListener("load", function () {
  // Sélectionne l'élément de chargement
  const loadingDiv = document.getElementById("loading");
  
  // Cache l'élément de chargement après le chargement de la page
  loadingDiv.style.display = "none";
});

/* BARRE DE NAVIGATION */

// Sélection des éléments du DOM

let nav = document.querySelector("nav");
let liens_menu = document.querySelector("#liens_menu");
let menu_responsive = document.querySelector(".menu-icon.cross");
let nav_p_nav = document.querySelector("#navigation");
let bool = false; // Variable pour le suivi de l'état du menu
const mes_sections = document.querySelectorAll("li"); // Sélectionne toutes les éléments de la liste du menu

window.addEventListener("load", function () {
  // Ajoute un écouteur d'événements pour s'assurer que le DOM est chargé
  jQuery(document).ready(function ($) {
    // Utilisation de jQuery pour un effet de menu
    $(".menu-icon").click(function (e) {
      // Ajoute un écouteur d'événements pour le clic sur l'icône du menu
      e.preventDefault();
      $this = $(this); // Assignation de l'élément actuel à la variable $this pour simplifier l'utilisation ultérieure
      if ($this.hasClass("is-opened")) {
        // Vérifie si l'élément actuel a la classe 'is-opened'
        $this.addClass("is-closed").removeClass("is-opened"); // Si c'est le cas, ajoute la classe 'is-closed' et supprime 'is-opened'
      } else {
        $this.removeClass("is-closed").addClass("is-opened"); // Sinon, supprime la classe 'is-closed' et ajoute 'is-opened'
      }
    });
  });

  /* Ajout d'une écoute d'évenement sur l'icon du menu en mode mobile */

  menu_responsive.addEventListener("click", () => {
    // Ajoute un écouteur d'événements pour le clic sur l'icône du menu responsive
    liens_menu.style = bool
      ? "display : none;"
      : "display : flex; marginTop : auto;"; // Affiche ou masque les liens du menu en fonction de l'état actuel
    nav.style.cssText = bool
      ? "height: 80px; animation : none; flex-direction: row"
      : "height: 100vh; animation : opacity .7s; flex-direction: column;"; // Modifie le style de la navigation en fonction de l'état actuel
    nav_p_nav.style = !bool
      ? "position: absolute; top : 20px;"
      : "position: initial;"; // Modifie le style du titre de la navigation en fonction de l'état actuel
    bool = !bool; // Inverse la valeur booléenne pour le suivi de l'état du menu
    
    mes_sections.forEach((element) => {
      // Ajoute un écouteur d'événements à chaque éléments du menu
      element.addEventListener("click", function () {

    liens_menu.style.display = 'none'
      })
  });
})
  
  /* MENU RESPONSIVE */
  
  /* AU CLIC SUR LES LIENS DE LA NAV */
  

  mes_sections.forEach((element) => {
    // Ajoute un écouteur d'événements à chaque éléments du menu
    element.addEventListener("click", function () {
      window.scrollTo({
        // Utilise scrollTop pour définir la position de défilement en haut de la section
        top: 0, // Ajuste le scroll en haut de la page pour chaque clique sur les liens du menus
        behavior: "smooth", // Défilement fluide
      });
    });
  });
});


// Formulaire de contact
// Selectionne le formulaire de contact
document
  .querySelector("#contact_section form")
  .addEventListener("submit", async function (event) {
    // Empêche l'envoi normal du formulaire
    event.preventDefault();

    // Cible l'évènement qui déclenche l'envoi du formulaire
    const form = event.target;

    // Créer un nouvel objet Formdata à partir du formulaire
    const formData = new FormData(form);

    // Récupère le premier span qui affiche le message de succès
    const successSpan = document.querySelector(
      "#contact_section span:first-of-type"
    );

    // Récupère le second / dernier span qui affiche le message d'erreur
    const errorSpan = document.querySelector(
      "#contact_section span:last-of-type"
    );

    // Récupère le GIF de chargement
    const loadingGif = document.querySelector("#form-loading");

    // Convertir FormData en objet JSON afin de l'envoyer au serveur
    const formDataObj = Object.fromEntries(formData.entries());

    try {
      // Affiche le GIF de chargement
      loadingGif.style.display = "flex";

      // Envoi une requête post au serveur avec les données du formulaire
      const response = await fetch("/contact/formulaire", {
        method: "POST",

        // En-tête de la requête
        headers: {
          "Content-Type": "application/json",
        },

        // Objet du Corps de la requête reconvertis en une chaine de caractères au format JSON
        body: JSON.stringify(formDataObj),
      });

      // Vérifie si la réponse du serveur est ok
      if (response.ok) {
        // Récupère les données de la réponse du serveur
        const data = await response.json();

        // Vérifie si le message de la réponse est "Email envoyé avec succès"
        if (data.message === "Email envoyé avec succès") {
          // Met la class du span avec l'animation
          successSpan.style.display = "block";
          successSpan.classList.add("success-animation");

          // Effacement des données du formulaire après succès
          form.reset();
        } else {
          console.error(
            "Erreur lors de l'envoi de l'email:",
            response.statusText
          );
          // Affichage du message d'erreur si la réponse n'est pas ok / false
          errorSpan.style.cssText = "display: block; background-color: red;";
          errorSpan.textContent =
            "Une erreur s'est produite.  Correction en cours.";
        }
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email", error);
      errorSpan.style.cssText = "display: block; background-color: red;";
      errorSpan.textContent =
        "Erreur d'éxception lors de l'envoi de l'email. Correction en cours.";
    } finally {
      // Cache le GIF de chargement une fois que la requête est terminée (succès ou échec)
      loadingGif.style.display = "none";
    }
  });
