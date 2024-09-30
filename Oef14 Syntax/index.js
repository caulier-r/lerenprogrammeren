//Syntax, de while loop, werkt net als for loop alleen korter geschreven.

{
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}

{
    let i = 1;
    let som = 0;
    while (i <= 100) {
        som += i;
        i++;
    }
    console.log("De som van de getallen 1 tot en met 100 is: " + som);
}

//om even getallen uit te komen doe je if(i%2==0) / om oneven getallen uit te komen doe je if(i%2!==0)
{
    let i = 1;
    while (i <= 20) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }
}

/*{  Nog eens na vragen!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let getal = 5;
    let teRadenGetal = parseInt(prompt("Kies een getal tussen 1 en 10."));
    while (teRadenGetal !== getal) {
        if(teRadenGetal < getal){
            console.log("Het getal is groter");
        }else if(teRadenGetal > getal){
            console.log("Het getal is kleiner");
        }else{
            console.log("Het getal is inderdaad = " + getal);
        }
    }
}*/

        console.log("----");

{

    //i = 1 // i * 4 = 4 // => 4 * 4 = 16 * 16 = 256 * 256 = ...
    let eindGetal = parseInt(prompt("Kies een eindgetal."));
    let i = 1;
    while(i<=eindGetal){
        if(i==1){
            console.log(i);
            i = i * 4;
        }else{
            console.log(i);
            i = i * i;
        }
    }
/*
    //Dit is het zelfde als hierboven, properder en korter uitgeschreven.
    while(i <= eindGetal){
        console.log(i);
        if(i === 1){
            i = i * 4;
        }else{
            i = i ** 2;
        }
    }
 */

}

