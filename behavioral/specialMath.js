// Given class SpecialMath create a new instance Command, which would store all the commands given to the SpecialMath
class SpecialMath {
  constructor(num) {
    this._num = num;
  }

  square() {
    return this._num ** 2;
  }

  cube() {
    return this._num ** 3;
  }

  squareRoot() {
    return Math.sqrt(this._num);
  }
}

class Command{
commandsExecuted =[];

constructor(mathObject){
   this.mathObject = mathObject;
}
   execute(operation){
    this.commandsExecuted.push(operation);
    this.mathObject[operation]();
   }
}

const x = new Command(new SpecialMath(5));
x.execute('square');
x.execute('cube');

console.log(x.commandsExecuted); // ['square', 'cube']
