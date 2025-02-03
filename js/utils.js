// utils classes


class Observable {
  constructor() {
    this.observers = new Set();
    this.changed = false;
  }

  addObservers(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.delete(observer);
  }

  notifyObservers(object = null) {
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


