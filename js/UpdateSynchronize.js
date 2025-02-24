class UpdateSynchronize extends Observer {
    constructor(model1, model2) {
        super();
        this.model1 = model1;
        this.model2 = model2;

        // Ajout de cet observateur aux deux modèles
        this.model1.addObservers(this);
        this.model2.addObservers(this);
    }

    update(observable, object) {
        if (observable === this.model1) {
            // Si model1 est modifié, on ajuste model2
            let diff = 10-observable.i; // Différence de changement
            this.model2.setValue(diff);
        } else if (observable === this.model2) {
            let diff = 10-observable.i;
            this.model1.setValue(diff);
        }
    }
}
