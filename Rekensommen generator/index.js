{
    while (true) {

        var min = parseInt(prompt("Kies een minimumwaarde!"));
        var max = parseInt(prompt("Kies een maximumwaarde!"));

        if (max <= min) {
            console.log("Sorry uw maximumwaarde moet groter zijn dan uw minimumwaarde. Begin het programma opnieuw.");
            continue;
        } else {
            console.log(`U koos voor ${min} als minimumwaarde en ${max} als maximumwaarde.`);
        }

        var getal1 = parseInt(prompt(`Kies een getal, die tussen ${min} en ${max} ligt. 1/2`));

        if (getal1 > max || getal1 < min) {
            console.log(`Sorry uw getal ligt niet tussen ${min} en ${max}, begin opnieuw.`);
            continue;
        } else {
            console.log(`U koos voor ${getal1}.`);
        }

        var getal2 = parseInt(prompt(`Kies een getal, die tussen ${min} en ${max} ligt. 2/2`));

        if (getal2 > max || getal2 < min) {
            console.log(`Sorry uw getal ligt niet tussen ${min} en ${max}, begin opnieuw.`);
            continue;
        } else {
            console.log(`U koos voor ${getal2}.`);
        }
        break;
    }


}