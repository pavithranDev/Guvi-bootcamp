//A person Class
class person {
  constructor(fname, lname, age, gender, edu) {
    this.age = age;
    this.gender = gender;
    this.edu = edu;
    this.fullname = fname + " " + lname;
  }
  talk() {
    console.log("Talking");
  }
  eat() {
    console.log("Eating");
  }
  run() {
    console.log("Running");
  }
}
let pavi = new person("Pavithran", "Sivaji", 23, "male", "DCE");
pavi.talk();
console.log(pavi.fullname);

//To calculate Uber fare
class fareClac {
  constructor(baseFare, waitingFare, bookingCost) {
    this.baseFare = baseFare;
    this.waitingFare = waitingFare;
    this.bookingCost = bookingCost;
  }
  totalFare(km, waitHrs) {
    let cost = (this.baseFare * km) + (this.waitingFare * waitHrs) + this.bookingCost;
    console.log(`The Cost of your Fare is ${cost}`);
  }
}

let ola = new fareClac(10, 12, 7);
let uber =new fareClac(11, 5, 10)

ola.totalFare(17, 1)
uber.totalFare(17, 1)