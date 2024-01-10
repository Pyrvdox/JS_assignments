const Robot = function (name) {
  this.name = name;
  this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
  if (isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  } else {
    console.log("Robot " + this.name + " is broken");
  }
};

Robot.prototype.changeName = function (newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  name = newname;
};

Robot.prototype.fixIt = function () {
  this.isFunctional = true;
  console.log("Robot " + this.name + " was fixed");
};

const R2D2 = new Robot("R2D2");
const C3PO = new Robot("C3PO");