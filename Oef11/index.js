{
    let hoeveelHeid = parseInt(prompt("Hoeveel symbolen had u gewilt?"));
    var ster = "*";
    //var som = 0;

    for (let i = 1;i<=hoeveelHeid;i++){
        console.log(ster);
        ster = ster + "*";
    }
};


{
    let hoeveelHeid = parseInt(prompt("Hoeveel getallen had u gewilt?"));
        console.log(`U koos voor ${hoeveelHeid}.`);
    let output = "";

    for(let i = 1;i<=hoeveelHeid;i++){
        if(i<=9){
            output = output + `0${i},`;
        }else if(i<hoeveelHeid){
            output = output + `${i},`;
        }else{
            output = output + `${i}`;
        };
    };
        console.log(output);
};

{
    let hoeveelHeid = parseInt(prompt("Geef een getal in!"));
        console.log(`U koos voor ${hoeveelHeid}.`);
    let output = "";

        for(var i = 1;i<=hoeveelHeid;i = i * 2) {

            if (i * 2 < hoeveelHeid) {
                output = output + `${i},`;
            } else {
                output = output + `${i}`;
            };
        }
        console.log(output);

}