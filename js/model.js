class ModelInteger extends Observable {
    constructor() {
      super();
      this.i = 0;
      this.MIN_VALUE = 0;
      this.MAX_VALUE = 10;
    }
  
    plus() {
        this.setValue(this.i+1);
   
    }
  
    minus() {
        this.setValue(this.i-1);
      }
    
  
    setValue(value) {
      if (value >= this.MIN_VALUE && value <= this.MAX_VALUE) {
        this.i=value;
        super.setChanged();
        super.notifyObservers(this);
    }
    }
  

}
  