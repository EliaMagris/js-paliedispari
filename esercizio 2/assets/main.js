let scelta = prompt("scrivi 'pari' o 'dispari'");

let pari = 'pari';
let dispari = 'dispari';

if (scelta == 'pari' || scelta == 'dispari'){
  
let sceltaUser = numberUtente();

console.log(`l'utente ha scelto il numero ${sceltaUser}`);


let numeroRandomPc = pcNumberSum();
console.log(`il pc ha scelto il numero ${numeroRandomPc}`);

let somma = sum(sceltaUser,numeroRandomPc)

console.log(`questa è la somma: ${somma}`)

let pariDispari = ParDisp(somma)

console.log(`il numero è: ${pariDispari}`)

// funzione numero random pc

function pcNumberSum() {
  let pcNumber = Math.floor(Math.random() * 5) + 1;

  return pcNumber;
}

// funzione controllo scelta utente

function numberUtente() {
  let sceltaUtente = parseInt(prompt("scrivi un numero da 1 a 5"));

  if (sceltaUtente > 5) {
    alert("oh simia, dal 5 in giù");
  
  } else if (sceltaUtente < 1) {
    alert("oh simia, dal 1 in su");
  
  } else {
  
  }

  return sceltaUtente;
}

// funzione somma numeri random

function sum(pcNumb, userNumb){
  let somma = pcNumb + userNumb
  return somma
}

// funzione per la dichiarazione pari o dispari

function ParDisp() {
      let controllo = "";
      
      if (somma % 2 == 0) {
        controllo = 'pari';
        return controllo
      
      } else {
        controllo = 'dispari';
        return controllo
      }
   }

  //  funzione per dichiarare il vincitore

  if(scelta == ParDisp()){
    console.log("hai Vinto")
  }else{
    console.log("hai Perso")
  }

} else{
  console.log("dai per piacere")
}


