class ModelInteger extends Observable {
    constructor() {
      super();
      this.i = 0;
      this.MIN_VALUE = 0;
      this.MAX_VALUE = 10;
      this.lock = false; 
    }
  
    plus() {
        this.setValue(this.i+1);
   
    }
  
    minus() {
        this.setValue(this.i-1);
      }
    
  

    setValue(value) {
      if (!this.lock && value >= this.MIN_VALUE && value <= this.MAX_VALUE) {
          this.lock = true;
          this.i = value;
          super.setChanged();
          super.notifyObservers(this);
          this.lock = false;
      }
  }

  

}
  