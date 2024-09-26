// let, var, const
// let blockscope, var universeel, const is een vaste waarde

//DATATYPES
var getal  = 5; //de output zal dus een NUMBER zijn
var tekst = "Tom";
var keuze = 1;// 1 = true, 0 = false //BOOLEAN!!
/*Object
Array
let stuur;
let banden;
let koppeling;

let auto
*/
var strNum  = "123";
strNum = parseInt(strNum); //met parseInt wordt het woord '123' een getal

var strNum1 = "123";
strNum1 = parseInt(strNum1);//Kommagetallen = parseFloat

var resultaat = strNum+strNum1;
console.log(resultaat);
//console.log(typeof(resultaat)); hiermee krijg je in de log te zien of het een Number of tekst is

/*let person = {
    name: "jane",
    age: 30,
    isStudent: false
};

console.log(typeof(person));
console.log(person.name);
*/

var name = "Robin"
var familyName = "Caulier";
var yearBirth = 2000;
var year = 2024;
var resultaat = year - yearBirth;

console.log(familyName, yearBirth, year);

//zo krijg je in de console site naam, jaartallen en het verschil tussen de jaartallen
console.log("het resultaat van " + familyName + " " + name + " is " + resultaat);


/*
var optelsom = 3;
var optelsom1 = 2;
var resulth = optelsom + optelsom1;

var vermenigVuldiging = 3;
var vermenigVuldiging1 = 2;
var resulth1 = vermenigVuldiging * vermenigVuldiging1;

var deling = 3;
var deling1 = 2;
var resulth2 = deling / deling1;

var aftrekken = 3;
var aftrekken1 = 2;
var resulth3 = aftrekken - aftrekken1;

console.log("3 + 2 = " + resulth);
console.log("3 * 2 = " + resulth1);
console.log("3 / 2 = " + resulth2);
console.log("3 - 2 = " + resulth3);*/

//verkorte versie / Via prompt zorg je er voor dat je zelf een getal kan kiezen

var getal = parseInt(prompt("Voer je eerte getal in."))
var getal1 = parseInt(prompt("Voer je tweede getal in."))

console.log(`${getal} + ${getal1} = ${getal+getal1}`);
console.log(`${getal} * ${getal1} = ${getal*getal1}`);
console.log(`${getal} / ${getal1} = ${getal/getal1}`);
console.log(`${getal} - ${getal1} = ${getal-getal1}`);
console.log(`${getal} % ${getal1} = ${getal%getal1}`);
console.log(`${getal} ** ${getal1} = ${getal**getal1}`);
console.log(`${getal} - ${getal1} = ${getal-getal1}`);
console.log(getal++);

var getal2 = 5
    getal2+=10; //shorthandnotatie
console.log(getal2)

console.log(5=="5");
console.log(5==="5");