// this = jis context me function call ho raha hai, usko refer karta hai
// global context me this = global object (browser me window, node me global)
console.log(this);

// function context me this = jis object ke method ke roop me function call ho raha hai, us object ko refer karta hai
function test() {
  console.log(this);
}
test();

// object context me this = jis object ke method ke roop me function call ho raha hai, us object ko refer karta hai
let user = {
  name: "Chiku",
  greet: function () {
    console.log(this.name);
  }
};
user.greet();

// arrow function context me this = jis context me arrow function define ho raha hai, usko refer karta hai
let user1 = {
  name: "Chiku",
  greet: () => {
    console.log(this.name);
  }
};
user.greet(); // arrow function me this global object ko refer karega, isliye undefined aayega

// practice
let obj = {
  name: "Chiku",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};
obj.normal();
obj.arrow();

let obj1 = {
  name: "Chiku",
  greet: function () {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};
obj1.greet();

let obj2 = {
  name: "Chiku",
  greet: function () {
    let inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

let obj3 = {
  name: "Chiku",
  greet: function () {
    let self = this;

    function inner() {
      console.log(self.name);
    }

    inner();
  }
};