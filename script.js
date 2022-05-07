'use strict'

// punctul 1
// Creați o funcție care primește ca și parametru un număr și returnează dublul său dacă numărul primit este impar, altfel returnează numărul scăzut cu 2 dacă este par. Afișați rezultatul în consolă.

console.log('punctul 1')
function par_impar(numarComparat) {
    if (numarComparat % 2 === 0) {
        return console.log(numarComparat - 2);
    } else {
        return console.log(numarComparat * 2);
    }
}
const numarComparat = par_impar(121);
console.log('codul de la punctul 1 a fost executat')

// punctul 2
// Creați o funcție care stochează intr-un array doar numerele prime dintr-un array primit ca si parametru. Parcurgeți array-ul folosind un “for loop”. Afișați rezultatul în consola.


console.log('punctul 2')
function range(size, startAt = 1) {
    return [...Array(size).keys()].map(i => i + startAt);
}

const arr = range(121);
console.log(arr);

function primeNumbers(arr) {
    let savePrimes = [];
    function isPrimeNumber(arrElement) {
        if (arrElement <= 1) {
            console.log(arrElement + " nu este numar prim valid!");
        }
        for (let x = 2; x < arrElement; x++) {
            if (arrElement % x === 0) {
                return false;
            }
        }
        return true;
    }
    for (let y = 0; y <= arr.length - 1; y++) {
        if (isPrimeNumber(arr[y])) {
            savePrimes.push(arr[y]);
        }
    }
    console.log(savePrimes);
}
primeNumbers(arr);
console.log('codul de la punctul 2 a fost executat')

// punctul 3
// Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca si parametru. Parcurgeți array-ul folosind “forEach”. Afișați rezultatul în consola.


console.log('punctul 3')
const givenArray = [1, "1", "salut", 2, 6, true, "true"];
const saveStrings = [];

givenArray.forEach(function (item) {
    if (typeof item === 'string') {
        saveStrings.push(item);
    }
})
console.log(saveStrings);
console.log('codul de la punctul 3 a fost executat')


// punctul 4
// Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip string folosind  “for loop” si keyword-ul “continue”.

console.log('punctul 4')
function addDigits(numarDat) {
    let digitArray = Array.from(numarDat);
    console.log(digitArray);
    let sumDigits = 0;
    for (let x = 0; x < digitArray.length; x++) {
        if (Number(digitArray[x] % 2 == 0)) {
            continue;
        } else if (Number(digitArray[x] % 2 == 1)) {
            sumDigits += Number(digitArray[x]);
        }
    }
    console.log(sumDigits);
}
addDigits('123456789')
console.log('codul de la punctul 4 a fost executat')


// punctul 5
// Creați un switch cu cel puțin 5 case-uri din care cel puțin 2 să aibă același rezultat, după exemplul prezentat la curs.

console.log('punctul 5')
const textInput = `Text`;
console.log(textInput)
console.log(textInput.length)
switch (textInput.length) {
    case 1:
    case 2:
        console.log(`Textul '${textInput}' are lungimea de 1 sau 2 caractere.`);
        break;
    case 3:
        console.log(`Textul '${textInput}' are lungimea de 3 caractere.`);
        break;
    case 4:
        console.log(`Textul '${textInput}' are lungimea de 4 caractere.`);
        break;
    case 5:
    default:
        console.log(`Textul '${textInput}' are lungimea de 5 sau mai multe caractere.`);
        break;
}
console.log('codul de la punctul 5 a fost executat')



// Observație: Folosiți cel puțin 2 tipuri la alegere de creare a funcțiilor în rezolvarea exercițiilor ( Exemplu, exercițiul 1 și 2 cu arrow function, exercițiul 3 și 4 cu function statement - în curs au fost prezentate 4 metode de a crea funcții) 

