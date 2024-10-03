// schrijf een programma die ervoor zorgt dat je iedere derde getal in een reeks 2x weergeeft en iedere reeel 10de
// in een reeks weglaat maar wel een spatie schrijft.

let output = '';

for (let i = 1; i <= 99; i++) {
    // Controleer of het getal deelbaar is door 10
    if (i % 10 === 0) {
        output += ' '; // Voeg een spatie toe
        console.log(` ,`);
        continue; // Sla de rest van de loop over
    }

    // Controleer of het getal deelbaar is door 3
    if (i % 3 === 0) {
        output += i + ' ' + i + ' '; // Voeg het getal twee keer toe
        console.log(`${output},${output},`);
    } else {
        output += i + ' '; // Voeg het getal één keer toe
        console.log(`${output},`)
    }
}