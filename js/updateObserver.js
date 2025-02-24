class updateObserver extends Observer {
    constructor(mediateur) {
      super();
      this.mediateur = mediateur;
  
    }
  
    update(observable, object) {
      console.log("update() appelé !");
      //this.mediateur.updateActivation();  // Vérifie et ajuste les états des boutons
      this.mediateur.mediate();  // Met à jour la vue
      
  
    }
  }