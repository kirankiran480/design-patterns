
// C) You have a list of users.Add functionality to subscribe to the changes on it(e.g.after calling push, pop).
class SubjectClass {
  constructor() {
  this.callbacks = []
  }
  // next func to trigger broadcast data to listeners
  next(data) {
  this.callbacks.forEach((callback)=>{
  callback.apply(null,[data]);
  })
  }

  subscribe(handlerFunc) {
   this.callbacks.push(handlerFunc);
  }
}

// class returns a singleton instance of subjectClass to share among different classes
class SubjectService{
  constructor() {
    if (!SubjectService.instance) {
     this.subject = new SubjectClass();
      SubjectService.instance = this;
    }
    return SubjectService.instance;
  }
}


class List extends Array {
    constructor(){
       super();
    }
    push(...element){
    let subjectService = new SubjectService();
    subjectService.subject.next("push")
     super.push(...element);
    }

    pop(){
    let subjectService = new SubjectService();
    subjectService.subject.next("pop")
     super.pop();
    }
}

let subjectService = new SubjectService();


subjectService.subject.subscribe((response) => {
  console.log(response)
});

let users = new List();
users.push("Alex Banks");
users.push("Eve Porcello")
console.log(users);

users.pop();
console.log(users);






