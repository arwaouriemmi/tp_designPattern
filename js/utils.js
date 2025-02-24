// utils classes


class Observable {
  constructor() {
    this.observers = new Set();
    this.changed = false;
  }


  addObservers(observer) {
    console.log("🔍 Ajout d'un observer :", observer);
    console.log("Type de l'observer :", typeof observer);
    console.log("Observer a une méthode update :", typeof observer.update === "function");

    this.observers.add(observer);

    console.log(" Observers après ajout :", this.observers);
}


  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notifyObservers(object = null) {
    console.log("Notifying observers:", this.observers);
    if (this.changed) {
      this.changed = false;
      this.observers.forEach(observer => observer.update(object));
       
    }
  }

  clearObservers() {
    this.observers.clear();
  }

  setChanged() {
    this.changed = true;
  }
}

class Observer {
  update(observable, object) {
    throw new Error("update method must be implemented by subclass");
  }
}








