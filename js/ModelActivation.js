class ModelActivation extends Observable {
    constructor() {
        super();
        this.isPlusActive = true;
        this.isMinusActive = true;
        this.isSliderActive = true;
        this.isToggleActive = true;
    }

    getPlusActivation() {
        return this.isPlusActive;
    }

    getMinusActivation() {
        return this.isMinusActive;
    }

    getSliderActivation() {
        return this.isSliderActive;
    }

    setPlusActive(state) {
        this.isPlusActive = state;
        this.setChanged();
        this.notifyObservers();
    }

    setMinusActive(state) {
        this.isMinusActive = state;
        this.setChanged();
        this.notifyObservers();
    }

    setSliderActive(state) {
        this.isSliderActive = state;
        this.setChanged();
        this.notifyObservers();
    }
    getToggleActivation() {
        return this.isToggleActive;
    }

    setToggleActive(state) {
        console.log(`setToggleActive appelé avec: ${state}`);
        this.isToggleActive = state;
        this.setChanged();
        this.notifyObservers();
    }
}