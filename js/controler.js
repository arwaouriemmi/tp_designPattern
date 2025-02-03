class Controller extends Observer  {
  constructor(model) {
      super(); 
      this.model = model;
      this.view = new View(this); 
      this.model.addObservers(this); 
  }

 
  update(observable, object) {
    this.view.update(observable.i); 
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
          this.view.valueField.value = this.model.getValue(); // Réinitialise en cas d'entrée invalide
      }
  }

  // Mise à jour de la valeur depuis le slider
  updateValueFromSlider(value) {
      this.model.setValue(parseInt(value));
  }

  // Action sur le toggle On/Off (exemple d'une fonctionnalité supplémentaire)
  toggleState(isChecked) {
      console.log(`Toggle changed: ${isChecked}`);
      this.view.incrementButton.disabled = !isChecked;
      this.view.decrementButton.disabled = !isChecked;
  }
}



class PrintConsole extends Observer {
  update(observable, object) {
    console.log('Updated value of i:',observable.i);
  }
}