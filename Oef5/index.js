var getal = parseInt(prompt("Geef een getal in!"));

if(getal >= 0){
    console.log(getal + " is positief!")
}else{
    console.log(getal + " is negatief!")
};

/*Wanneer je een getal wilt vergelijken met elkaar gebruik je >=
Zo laat je checken of het getal groter of gelijk aan is aan het opgegeven getal
wanneer je <= gebruikt laat je checken of het getal kleiner of gelijk is als het opgegeven getal */

//Een schrikkeljaar is deelbaar door 4 maar niet door 100 tenzij door 400!

var jaar = parseInt(prompt("Geef een jaartal in!"));
//met || creeer je een 'or/of'
if((jaar%4 == 0 && jaar%100 !== 0) || (jaar%400 == 0)){
    console.log(jaar + " is een schrikkeljaar")
}else{
    console.log(jaar + " is geen schrikkeljaar")
};
//wanneer je geen commagetal wilt zet je %, hiermee deel je een getal zonder comma
//met een && creeer je een en situatie.

