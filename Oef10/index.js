{
    var aantalGetallen = parseInt(prompt("Hoeveel getallen had u gewenst."));
    let som = 0;

    for (let i = 1; i <= aantalGetallen; i++) {
        var getal = parseInt(prompt(`Kies getal ${i}`));
        console.log("U koos voor " + getal);
        som = som + getal;
    };
    console.log(`De totale som van de ${aantalGetallen} getallen is ${som}`);
//Ten alle tijde moet er een i zitten in de loop 'for' !!
}