document.addEventListener("DOMContentLoaded", () => {
  // Charger les traductions
  $.i18n().load({
      'fr': {
          'increment': 'Incrémenter',
          'decrement': 'Décrémenter',
          'placeholder': 'Entrez un nombre (0-10)',
          'title': 'TP IHM - Gestion d\'un Entier'
      },
      'en': {
          'increment': 'Increment',
          'decrement': 'Decrement',
          'placeholder': 'Enter a number (0-10)',
          'title': 'TP IHM - Integer Management'
      }
  });

  // Définir la langue par défaut
  $.i18n({
      locale: 'en' // Peut être changé dynamiquement
  });


 // document.getElementById("title").textContent = $.i18n('title');

  let model = new ModelInteger();  
  let controller = new Controller(model);



});

