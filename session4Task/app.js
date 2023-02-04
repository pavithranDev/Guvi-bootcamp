//JSON comparison
let obj1 = { name: "person 1", age: 5 },
  obj2 = { age: 5, name: "person 1" };

let jsonComp1 = JSON.stringify(obj1.age),
  jsonComp2 = JSON.stringify(obj2.age);
console.log(jsonComp1 == jsonComp2);

//request for Rest Countries API data

let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

function parsing() {
  let result = JSON.parse(request.response);
  console.log(result);
  for (let index = 0; index < result.length; index++) {
    console.log(
      result[index].flags.png +
        "-" +
        result[index].flags.svg +
        "-" +
        result[index].name +
        "-" +
        result[index].region +
        "-" +
        result[index].subregion +
        "-" +
        result[index].population
    );
  }
}

request.onload = parsing;
