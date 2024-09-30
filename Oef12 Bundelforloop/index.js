//1
{
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
    console.log("-2-");

//2
{
    for (let i = 10; i >= 1; i--) {
        console.log(i);
    }
}
    console.log("-3-");

//3
{
    for(let i = 1;i<=20;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
    console.log("-4-");

//4
{
    for(let i = 1;i<=20;i++){

        if(i%2!==0){
            console.log(i);
        }
    }
};
    console.log("-5-");

//5
{
    let output = "";
    let tafel=0;
    for(let i = 1;i<=10;i++){

        if (i*5 < 50) {
        tafel=i*5;
        output = output + `${tafel},`;
        } else {
        tafel=i*5;
        output = output + `${tafel}`;
        }
    }
    console.log(output);
};
    console.log("-6-");

//6
{

    let output = "";
    for (let i = 50;i <= 100; i++) {
        if(i>=50 && i < 100){
            output = output + `${i},`;
        }else{
            output = output + `${i}`;
        }
    }
    console.log(output);

};
    console.log("-7-");

//7
{

    let som = 0;
    for(let i = 1;i<=10;i++){
        som = som + i;
    }
        console.log("de totale som =", som);
};
    console.log("-8-");

//8
{

    let som = 1;
    for(let i = 1;i<=5;i++){
        som = som * i;
    }
    console.log(som);
};
    console.log("-9-");

//9
{

    for(let i = 1;i<=30;i++){
        if(i%3==0){
            console.log(i);
        }
    }
};
    console.log("-10-");

//10
{

    var tafel = parseInt(prompt("Wat is de tafel."));
    for(let i = 1;i<=10;i++){
        console.log(`${tafel} * ${i} =`, tafel*i);
    };
};
    console.log("-11-");

//11
{

    for(let i = 1;i<=1000;i++){
        console.log(i);
        i = i ** 2;
    }
}
    console.log("-12-");

//12
{

    let i = parseInt(prompt("Kies een getal naar keuze."));
    for (i;i>=0; i--) {
        console.log(i);
    }
};
    console.log("-13-");

//13
{
    let getal = parseInt(prompt("Kies een getal naar keuze."));
    for (let i = 1; i <= getal; i++) {
        console.log(i);
    }
};
    console.log("-14-");

//14
{

    let getal = parseInt(prompt("Kies een getal naar keuze."));
    let som = 0;
    for(let i = 1;i<=getal;i++){
        som = som + i;
    }
    console.log("de totale som =", som);
};
    console.log("-15-");

//15

    console.log("-16-");

//16
{

    let som = 0;
    for(let i = 2;i<=100;i++){
        if(i%2 == 0){
            console.log(som);
            som = som + i;
        }

    }

}

    console.log("-17-");

//17
{
    let som = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(som);
            som = som + i;
        }

    }

}

    console.log("-18-");

//18
{

}

    console.log("-19-");

//19
{

    let getal = parseInt(prompt("Kies een getal."));
    for(let i = 1;i<=getal;i++){
        if(i%5 == 0){
            console.log(i);
        }

    }

}

    console.log("-20-");

//20
{

}

    console.log("-21-");

//21
{
    for(let i = 1;i<=100;i++){
        if(i%1 == 0){
            console.log(i);
        }else if(i%i == 0){
            console.log(i);
        }
    }
}