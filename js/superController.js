class SuperController {
    constructor(model1,model2,modelActivation1,modelActivation2){
        this.controller1 = new Controller(model1,modelActivation1);
        this.controller2 = new Controller(model2,modelActivation2);
       this.synchronizer = new UpdateSynchronize(model1,model2);
    }
}
