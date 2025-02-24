class Controller extends Observer  {
  constructor(model,modelActivation) {
      super(); 
      this.model = model;
      this.view = new View(this); 
      this.model.addObservers(this); 
      this.modelActivation = modelActivation;
      this.mediateur = new MediateurActivation(this.model, this.modelActivation, this.view);
      this.updateObserverInstance = new updateObserver(this.mediateur);
      this.model.addObservers(this.updateObserverInstance);
      this.modelActivation.addObservers(this.updateObserverInstance);
    

  }

 
  update(observable, object) {
    this.view.update(observable.i); 
    this.modelActivation.setPlusActive(observable.i < this.model.MAX_VALUE);
    this.modelActivation.setMinusActive(observable.i > this.model.MIN_VALUE);
    console.log('Updated value of i:',observable.i);
  }

  increment() {
      this.model.plus();
  }

  decrement() {
      this.model.minus();
  }

  updateValueFromInput() {
      let value = parseInt(this.view.valueField.value);
      if (!isNaN(value)) {
          this.model.setValue(value);
      } else {
          this.view.valueField.value = this.model.getValue(); 
      }
  }

  updateValueFromSlider(value) {
      this.model.setValue(parseInt(value));
  }

  toggleState(isChecked) {
    console.log(`toggleState appelé avec: ${isChecked}`); 
    this.modelActivation.setToggleActive(isChecked);
  }

}



class PrintConsole extends Observer {
  update(observable, object) {
    console.log('Updated value of i:',observable.i);
  }
}