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

class CalculatorAdaptor extends NewCalculator {
  constructor(){
  super();
  }
  multiply (result, num) {
    if (result.res) {
      return super.multiply(result.res, num);
    }
    return super.multiply(result, num);
  }
}

let x = new CalculatorAdaptor();
let oldCalculator = new OldCalculator();
console.log(x.multiply(oldCalculator.operations(3, 2, "sub"), 6));

