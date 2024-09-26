var getal = parseInt(prompt("Voer je leeftijd in."));

if(getal >= 18) {
    console.log("U bent " + getal + " jaar oud, U mag deelnemen aan de spellen van de nationale loterij!")

    var text = prompt("Bent u geintereseerd in een bulletin, of koopt u liever appart vakjes?");

    if(text === "bulletin"){
        console.log("Deze kost €20.")
    }else if(text === "vakjes"){
        console.log("2 vakjes = €4, 4 vakjes = €8, 6 vakjes = €12, 8 vakjes €16 of 10 vakjes voor €18")
    }else{
        console.log("Sorry dit is geen geldig antwoord!")
    }

}else{
    console.log("U bent maar " + getal + " en dus te jong. De spelen zijn pas toegestaan vanaf 18+")
};