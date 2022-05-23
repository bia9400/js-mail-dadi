/* Genero delle email casuali */
const nameRandom=["biagio","peppe","domenico","alice","erica","settimio"]
const surnameRandom=["fossati","ferro","leica","lentini","borsellino","falcone"]
const numberEta=["99","88","98","90","82","94"]

const emails=[];


for(let i = 0 ; i < 8; i++ ){
    /* genero delle posizioni random per pescare dai miei vettori */
    let x=nameRandom[Math.round(Math.random()*5)]
    let y=surnameRandom[Math.round(Math.random()*5)]
    let z=numberEta[Math.round(Math.random()*5)]
    /* inserisco la stringa email nel vettore emails */
    emails[i]= x+"."+y+"_"+z+"@gmail.com"
    /* rendo ogni email diversa  */
    for(let k=0 ; k < emails.length ; k++){
        if(emails[i]===emails[k]){
            emails.pop
        }
    }
    
}
console.log(emails);

let userEmail= prompt("Inserisci la tua email");
let control= -1;
for(let pippo = 0 ; pippo < emails.length ; pippo++){
    if(emails[pippo]==userEmail){
        control=1;
    }
}
if(control !==1){
 alert("Email non presente nel nostro database")
}
else{
    console.log("Benvenuto");
    let printHtml=document.getElementById("stampa")
    printHtml.innerHTML="<h1>Sei nella lista delle emails valide: ACCESSO CONSENTITO!</h1>"
}