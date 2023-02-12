
let request1=new XMLHttpRequest();
request1.open('GET','https://restcountries.com/v2/all');
request1.send();
request1.onload = function () {
    var countryData = JSON.parse(this.response);
    const asia = countryData.filter((element) => {
        if (element.region === 'Asia') {
            return element.name;
        }
    })
    console.log(asia);
}
//b) Get all the countries with population of less than 2 lacs using Filter function

let request2=new XMLHttpRequest();
request2.open('GET','https://restcountries.com/v2/all');
request2.send();
request2.onload=function (){
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);}

//c)Print the following details name, capital, flag using forEach function.

let request3=new XMLHttpRequest();
request3.open('GET','https://restcountries.com/v2/all');
request3.send();
request3.onload=function (){
    var countryData=JSON.parse(this.response);
    countryData.forEach((element)=>{
        console.log(element.name,element.capital,element.flag);
    })}

//d) Print the total population of countries using reduce function

let request4=new XMLHttpRequest();
request4.open('GET','https://restcountries.com/v2/all');
request4.send();
request4.onload=function (){
    var countryData=JSON.parse(this.response);
    const population=countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);
}

//e)Print the country which use US Dollars as currency.
let request5 = new XMLHttpRequest();
request5.open('GET','https://restcountries.com/v2/all');
request5.send();
request5.onload = function () {
        var data = JSON.parse(this.response);
        var cur=[];
        for(i=0;i<data.length;i++){
            if(data[i].currencies[0].code==="USD")
            {
                console.log("name:",data[i].name,"==>",data[i].currencies[0].code)
            }
        }
    }
