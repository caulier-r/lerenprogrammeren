var getal = parseInt(prompt("Geef een getal in!"));

if(getal%2 == 0){
    console.log(getal + " is even.")
}else{
    console.log(getal + " is oneven")
};
//zo laat je js checken of het getal even/oneven is ^^

var getal1 = parseInt(prompt("Geef getal 1/3 in!"));
var getal2 = parseInt(prompt("Geef getal 2/3 in!"));
var getal3 = parseInt(prompt("Geef getal 3/3 in!"));

if((getal1 > getal2) && (getal1 > getal3)){
    console.log(getal1 + " is het grootste getal.")
}else if((getal2 > getal1) && (getal2 > getal3)){
    console.log(getal2 + " is het grootste getal.")
}else{
    console.log(getal3 + " is het grootste getal.")
};

//bij het controleren welk getal het grootste is gebruik je best && inplaats van ||

var getal1 = parseInt(prompt("Geef getal 1/3 in!"));
var getal2 = parseInt(prompt("Geef getal 2/3 in!"));
var getal3 = parseInt(prompt("Geef getal 3/3 in!"));

var grootste = Math.max(getal1, getal2, getal3);
console.log("Het grootste getal is " + grootste);

//het zelfde als er boven ^^ met het enige verschil, hierbij wordt de inhoud van js gebruikt. en is het dus veel korter.
