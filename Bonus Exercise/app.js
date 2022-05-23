let arrayElements= prompt("Quanti elementi deve contenere il tuo array?")

if(isNaN(parseInt(arrayElements)))[
    alert("inserire dei valori validi es(2,5,8)")
    
]
if(parseInt(arrayElements) <= 0){
    alert("L'array non può avere 0 elementi")
}


let arrayExtractor=prompt("Quanti elementi devo estrarre dal fondo del tuo array?")

if(isNaN(parseInt(arrayExtractor)))[
    alert("inserire dei valori validi es(2,5,8)")
    
]
if(parseInt(arrayExtractor) >= parseInt(arrayElements)){
    alert("Non puoi estrarre più eleenti di quelli presenti ell'array stesso")
}
else{
const myArray=[];
let stringArray="";

for(let i = 0; i<parseInt(arrayElements);i++){
    myArray[i]=Math.round(Math.random()*100)
    stringArray += myArray[i] + "   " ;
}
console.log(stringArray);
let printHtml= document.getElementById("print")
printHtml.innerHTML += "<h1>L'array generato è: [ "+stringArray+" ]"+"</h1>"

const newArray=[];
let k=0;
let newStringArray="";
for(let i=(myArray.length-parseInt(arrayExtractor)) ; i < myArray.length; i++){

    newArray[k]=myArray[i]
    newStringArray += newArray[k] + "   " ;
    k+=1
}
console.log(newArray);


printHtml.innerHTML += "<h1>L'array estratto è: [ "+newStringArray+" ]"+"</h1>"
}