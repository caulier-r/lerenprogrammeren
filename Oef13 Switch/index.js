let nummer1 = 10;
let nummer2 = 5;
let operatie = "optellen";
let resultaat;

switch(operatie){
    case "optellen":
        resultaat = nummer1+nummer2;
        break;
    case "aftrekken":
        resultaat = nummer1-nummer2;
        break;
    case "vermenigvuldiging":
        resultaat = nummer1*nummer2;
        break;
    case "deling":
        resultaat = nummer1/nummer2;
        break;
    default:
        resultaat = "ongeldige operatie"
}
        console.log(resultaat);

// if(operatie="optellen"){
//        resultaat = nummer1+nummer2;
// }else if(operatie = "aftrekken"){
//        resultaat = nummer1-nummer2;
// }else if(operatie = "vermenigvuldiging){
//        resultaat = nummer1*nummer2;
// }else if(operatie = "deling"){
//        resultaat = nummer1/nummer2;
//}

