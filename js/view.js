class View {
  constructor(controller) {
      this.controller = controller;
      this.decrementButton = document.querySelector(".decrement");
      this.incrementButton = document.querySelector(".increment");
      this.valueField = document.querySelector(".value");
      this.slider = document.querySelector(".slider");
      this.toggle = document.querySelector(".toggle");

    
      this.decrementButton.addEventListener("click", () => this.controller.decrement());
      this.incrementButton.addEventListener("click", () => this.controller.increment());
      this.slider.addEventListener("input", () => this.controller.updateValueFromSlider(this.slider.value));
      this.toggle.addEventListener("change", () => this.controller.toggleState(this.toggle.checked));
  }



  update(value) {
    this.valueField.value = value;
    this.slider.value = value;
    this.incrementButton.disabled = value >= 10;
    this.decrementButton.disabled = value <= 0;
}
}
