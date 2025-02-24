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

 let model1 = new ModelInteger();
 let model2 = new ModelInteger();
 let modelActivation1 = new ModelActivation();
 let modelActivation2= new ModelActivation(); 
 let superController = new SuperController(model1,model2,modelActivation1,modelActivation2);


});

