/*ITERATIES
*
* for loop
* */

// for(initialisatie;conditie;update "dit kan met optellen, aftrekken, vermenigvuldigen en delen){
//
// }

/*
Hiermee maak je een loop, alle getallen van 1 tot 5 worden genoteerd (5 is het laatste getal en wordt dus niet genoteerd)
let eindgetal = 5;
let i = 1;
for(i;i<eindgetal;i++){
    console.log("dit is nummer " + i);
};

*/
/*
//hiermee gaat het systeem optellen per 2
{
    let eindgetal = parseInt(prompt("Vul een getal in naar keuze"));
    let i = 1
    for(i;i<eindgetal;i+=2){
        console.log("dit is nummer " + i)
    };
}
*/

/*
//Dit is gewoon optellen 1 per 1
{
    let eindgetal = parseInt(prompt("Vul een getal in naar keuze."));
    let i = 1;
    for(i;i<eindgetal;i++){
        console.log("dit is nummer " + i);
    };
};
*/

/*
//hierbij word van 0 tot 20 geteld per 2
{
    for(let i = 1;i<=20;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
*/

//output: tafel van 1
/* 1*1 = 1
    1*2 = 2
    1*3 = 3
    1*4 = 4
    1*5 = 5
 */

/*
{
    var tafel = parseInt(prompt("Wat is de tafel."));
    var eindGetal = parseInt(prompt("Geef hier het eindgetal in!"));

    for(let i = 1;i<=eindGetal;i++){
        console.log(`${tafel} * ${i} =`, tafel*i);
    };

};
*/

{
//het berekenen van een gemiddelde
    let eindGetal = parseInt(prompt("Vul een getal in naar keuze."));
    let i = 1;
    let som = 0;
    let resultaat = 0;

    for(i;i<=eindGetal;i++){
        console.log(`${i} + ${som}`)
        som = som + i;
        console.log("=", som);
    }
    resultaat = som / 10;
    console.log("het gemiddelde is",resultaat);
};
