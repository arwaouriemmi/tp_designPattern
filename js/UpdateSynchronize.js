class UpdateSynchronize extends Observer {
    constructor(model1, model2) {
        super();
        this.model1 = model1;
        this.model2 = model2;
    }

    update(observable, object) {
        // Calcul de la valeur complémentaire pour que la somme soit toujours 10
        if (observable === this.model1) {
            this.model2.setValue(10 - this.model1.i);
            console.log('Updated value of i:',observable.i);
        } else {
            this.model1.setValue(10 - this.model2.i);
            console.log('Updated value of i:',observable.i);
        }
    }
    update(observable, object) {
        this.view.update(observable.i); 
        console.log('Updated value of i:',observable.i);
      }
}
