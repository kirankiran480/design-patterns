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

class CleverCalculator {
  constructor() {
    this.newCalculator = new NewCalculator();
    this.OldCalculator = new OldCalculator();
    this.memo = {};
  }
  add(t1, t2) {
    return this.memorize(this.OldCalculator.operations)(t1, t2, 'add').res;
  }
  sub(t1, t2) {
    return this.memorize(this.OldCalculator.operations)(t1, t2, 'sub').res;
  }

  divide(t1, t2) {
    return this.memorize(this.newCalculator.divide)(t1, t2);
  }

  multiply(t1, t2) {
    return this.memorize(this.newCalculator.multiply)(t1, t2);
  }

  memorize(func) {
    let slice = Array.prototype.slice;
    let memo = this.memo;
    return function () {
      let args = slice.call(arguments);

      if (args in memo) {
        return memo[args];
      } else
        return (memo[args.sort() + ''] = func.apply(this, args));
    }
  }
}

let cleverCalc = new CleverCalculator();
console.log(cleverCalc.add(2, 1));
console.log(cleverCalc.add(1, 2));