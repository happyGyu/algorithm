class Animal {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }
}

class Pet extends Animal {
  constructor(height, weight, name) {
    super();
    this.name = name;
  }
}

const myPet = new Pet(50, 20, "alex");

// class Example {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   c = "example";

//   getC() {
//     return this.c;
//   }

//   getA = () => {
//     return this.a;
//   };
// }

// const Person = "";

// {
//   console.log(Person);
//   class Person {}
// }

class Person {
  name = "Lee";

  constructor() {
    console.log(this.name); // name is not defined  => Person {name: 'Lee'}
  }
}

new Person();
