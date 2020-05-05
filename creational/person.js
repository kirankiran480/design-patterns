class Person {
  constructor(name = 'unnamed person') {
    this.name = name;
  }
}

class Shopper extends Person {

  constructor(name, money = 0) {
    super(name);
    this.money = money;
    this.employed = false;
  }
}

class Employee extends Shopper {

  constructor(name, money = 0, employer = '') {
    if (!Employee.instance) {
      super(name, money);
      this.employerName = employer;
      this.employed = true;
      Employee.instance = this;
    }
    else{
      console.warn('Instance can be created only once !!');
    }
    return Employee.instance;
  }
}

//create shopper alex banks  , money =100
// employee Eve Porcello, money =100
//You need to delegate initialization logic to another instance,
//  which you need to design and implement,
//  based on your Creational patterns’ knowledge.
//Also, Employee should be initialized only once –
//if you try to initialize new instance of it, previously created object should be returned
//(also, make sense to warn about it in the console).



class PersonFactory {
  createPerson(type, name, money = 0, employer = '') {
    switch (type) {
      case 'shopper':
        return new Shopper(name, money);
      case 'employee':
        return new Employee(name, money, employer)
    }
  }
}
let personFactory = new PersonFactory();

let eve = personFactory.createPerson('employee', 'Eve Porcello', 100, 'EPAM');
console.log(eve);
let eve2 = personFactory.createPerson('employee', 'Eve Porcello', 100, 'EPAM');
console.log(eve);
console.log(eve ==eve2);

let alex = personFactory.createPerson('shopper', 'Alex Banks',100);
console.log(alex);