class OldCalculator {
  constructor() {
    this.operations = function (term1, term2, operation) {
      switch (operation) {
        case 'add':
          return {
            res: term1 + term2
          };
        case 'sub':
          return {
            res: term1 - term2
          };
        default:
          return NaN;
      }
    };
  }
}

class NewCalculator {
  constructor() {
    this.multiply = function (term1, term2) {
      return term1 * term2;
    };
    this.divide = function (term1, term2) {
      return term1 / term2;
    };
  }
}

class UltimateCalculator {
    constructor(){
      this.newCalculator = new NewCalculator();
      this.OldCalculator = new OldCalculator();
    }
    add(t1,t2) {
      return  this.OldCalculator.operations(t1,t2,'add').res;
    }
    sub(t1,t2) {
      return  this.OldCalculator.operations(t1,t2,'sub').res;
    }

    divide(t1,t2) {
       return this.newCalculator.divide(t1,t2);
     }

     multiply(t1,t2){
     return this.newCalculator.multiply(t1,t2);
     }
}

let ultimateCalculator = new UltimateCalculator();
console.log(ultimateCalculator.add(1,2));