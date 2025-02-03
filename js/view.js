class View {
  constructor(controller) {
    this.controller = controller;

    // Créer dynamiquement le widget
    this.widget = this.createWidget();

    // Sélectionner les éléments créés
    this.decrementButton = this.widget.querySelector(".decrement");
    this.incrementButton = this.widget.querySelector(".increment");
    this.valueField = this.widget.querySelector(".value");
    this.slider = this.widget.querySelector(".slider");
    this.toggle = this.widget.querySelector(".toggle");

    // Ajouter les événements
    this.decrementButton.addEventListener("click", () => this.controller.decrement());
    this.incrementButton.addEventListener("click", () => this.controller.increment());
    this.slider.addEventListener("input", () => this.controller.updateValueFromSlider(this.slider.value));
    this.toggle.addEventListener("change", () => this.controller.toggleState(this.toggle.checked));
  }

  // Créer dynamiquement le widget
  createWidget() {
    // Créer un nouvel élément div avec la classe "bottom"
    const bottomDiv = document.createElement('div');
    bottomDiv.classList.add('bottom');

    // Créer un autre div avec la classe "widget"
    const widgetDiv = document.createElement('div');
    widgetDiv.classList.add('widget');

    // Créer les éléments enfants du widget
    const decrementButton = document.createElement('button');
    decrementButton.classList.add('button', 'decrement');
    decrementButton.textContent = '-';

    const valueField = document.createElement('input');
    valueField.classList.add('textField', 'value');
    valueField.value = 2;
    valueField.setAttribute('readonly', true);

    const incrementButton = document.createElement('button');
    incrementButton.classList.add('button', 'increment');
    incrementButton.textContent = '+';

    const slider = document.createElement('input');
    slider.classList.add('slider');
    slider.type = 'range';
    slider.min = 0;
    slider.max = 10;
    slider.value = 2;

    const label = document.createElement('label');
    label.classList.add('label');
    label.textContent = 'On / Off ';

    const toggle = document.createElement('input');
    toggle.classList.add('toggle');
    toggle.type = 'checkbox';
    toggle.checked = true;

    // Ajouter le toggle au label
    label.appendChild(toggle);

    // Ajouter tous les éléments au widget
    widgetDiv.appendChild(decrementButton);
    widgetDiv.appendChild(valueField);
    widgetDiv.appendChild(incrementButton);
    widgetDiv.appendChild(slider);
    widgetDiv.appendChild(label);

    // Ajouter le widget au bottomDiv
    bottomDiv.appendChild(widgetDiv);

    // Ajouter bottomDiv au body (ou à un autre conteneur de ton choix)
    document.body.appendChild(bottomDiv);

    return widgetDiv; // Retourner le widget pour les références ultérieures
  }

  // Mise à jour de la vue
  update(value) {
    this.valueField.value = value;
    this.slider.value = value;
    this.incrementButton.disabled = value >= 10;
    this.decrementButton.disabled = value <= 0;
  }
}
