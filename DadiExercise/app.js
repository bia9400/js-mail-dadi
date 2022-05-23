/* dichiaro e carico due array di numeri casuali  */
const arrayPc = [];
const arrayUser = [];
let sommaPc = 0;
let sommaUser = 0;
for (let i = 0; i < 6; i++) {
    arrayPc[i] = Math.round(Math.random() * 5) + 1
    arrayUser[i] = Math.round(Math.random() * 5) + 1
    sommaPc = sommaPc + arrayPc[i];
    sommaUser = sommaUser + arrayUser[i];
}
console.log(arrayPc, arrayUser);
console.log(sommaPc, sommaUser);
let printHtml = document.getElementById("result");
printHtml.innerHTML = "<h1>La tua somma è " + sommaUser + " la somma del Pc è " + sommaPc + "</h1>"
if (sommaPc > sommaUser) [
    printHtml.innerHTML += "<h2>Ha vinto il computer </h2>"
]
else if (sommaPc < sommaUser) {
    printHtml.innerHTML += "<h2>HAI VINTO!</h2>"
}
else {
    printHtml.innerHTML += "<h2>Parità!! VInce il PC</h2>"
 }
