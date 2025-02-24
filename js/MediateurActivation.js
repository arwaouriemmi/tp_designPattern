class MediateurActivation extends Mediateur {
    constructor(modelInteger, modelActivation, view) {
      super();
      this.modelInteger = modelInteger;
      this.modelActivation = modelActivation;
      this.view = view;
    }
  
    mediate() {
      const isEnabled = this.modelActivation.getToggleActivation();
      this.view.incrementButton.disabled = !(isEnabled && this.modelActivation.getPlusActivation());
      this.view.decrementButton.disabled = !(isEnabled && this.modelActivation.getMinusActivation());
      this.view.slider.disabled = !(isEnabled && this.modelActivation.getSliderActivation());
    }
  
    updateActivation() {
      let x = this.modelInteger.getValue();
      this.modelActivation.setPlusActive(x < this.modelInteger.MAX_VALUE);
      this.modelActivation.setMinusActive(x > this.modelInteger.MIN_VALUE);
      this.modelActivation.setChanged();
      this.modelActivation.notifyObservers();
    }
  }
  