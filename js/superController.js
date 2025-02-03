class SuperController {
    constructor(model1,model2) {
        this.controller1 = new Controller(model1);
        this.controller2 = new Controller(model2);

        this.synchronizer = new UpdateSynchronize(this.model1, this.model2);
        this.model1.addObservers(this.synchronizer);
        this.model2.addObservers(this.synchronizer);
    }
}
