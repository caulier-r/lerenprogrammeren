console.log("Aardappelen = €5, Speelgoedauto = €30 en de Fiets = €150");
let product = prompt("Maak een keuze tussen aardappelen, speelgoedauto en fiets").toLowerCase();
let prijzen = { aardappelen: 5, speelgoedauto: 30, fiets: 150 };
let aantalproducten = parseInt(prompt("Hoeveel had u er gewilt?"));

if (prijzen[product]) {
    console.log(`U koos voor ${product}.`);
    console.log(`U koos voor ${aantalproducten} ${aantalproducten === 1 ? "stuk" : "stuks"}.`);

    let productenPrijs = prijzen[product] * aantalproducten;
    console.log("Uw productenprijs is €" + productenPrijs);

    let korting = productenPrijs >= 100 ? 0.10 : productenPrijs >= 50 ? 0.05 : 0;
    if (korting > 0) console.log(`U heeft recht op ${korting * 100}% korting`);

    let totalePrijs = productenPrijs * (1 - korting);
    console.log("Uw totale prijs is €" + totalePrijs.toFixed(2));
} else {
    console.log("Sorry, dit hebben we niet.");
}
