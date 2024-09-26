var aantalProducten = 12;
var prijsPerProduct = 5; //in euro's

var totalePrijs = aantalProducten * prijsPerProduct;

if(aantalProducten > 10){
    let korting = totalePrijs * 0.10;
    totalePrijs = totalePrijs - korting;
};

console.log("Het totale bedrag is: €" + totalePrijs.toFixed(2));

//nog checken of het werkt!!!