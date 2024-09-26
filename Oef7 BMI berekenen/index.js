var getal = parseInt(prompt("Voer een getal in!"));

if((getal%3 == 0) && (getal%5 == 0)){
    console.log(getal + " is deelbaar door 3 en 5.")
}else{
    console.log(getal + " is niet deelbaar door 3 en 5.")
};

var gewicht = parseFloat(prompt("Vul uw gewicht in, in kg."));
var lengte = parseFloat(prompt("Vul uw Lengte in, in m."));

//via parseFloat kan je zorgen dat je een kommagetal kan invullen.

var lengte1 = lengte * lengte;
console.log(`Uw lengte *2 is ${lengte1.toFixed(2)}`);
var bmi = gewicht/lengte1;
console.log(`Uw BMI is ${bmi.toFixed(2)}`);

//via .toFixed kan je een kommagetal korter maken tot de zelf gekozen hoeveelheid achter de komma

if(bmi <= 18.5){
    console.log("U heeft ondergewicht.")
}else if(bmi <= 25){
    console.log("U heeft een normaal BMI.")
}else if(bmi <= 30){
    console.log("U heeft overgewicht.")
}else{
    console.log("U heeft obesitas.")
};