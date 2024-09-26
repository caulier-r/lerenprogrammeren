var name = prompt("Vul hier uw naam in.");
var workSituation = prompt("Geef uw beroep in, maak een keuze tussen: bediende, arbeider, werkzoekende!")

if(workSituation === "arbeider"){
    console.log(name + " is arbeider")
}else if(workSituation === "bediende"){
    console.log(name + " is bediende")
}else if(workSituation === "werkzoekende"){
    console.log(name + " is werkzoekende")
}else{
    console.log("sorry, maar uw antwoord is niet geldig!")
}