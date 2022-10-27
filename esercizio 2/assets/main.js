function generateResult() {
  let inputUser = parseInt(prompt("Inserisci un numero da 1 a 5"));

  if (inputUser > 5) {
    alert("oh simia, dal 5 in giù");
  } else if (inputUser < 1) {
    alert("oh simia, dal 1 in su");
  } else {
    document.getElementById("userNumber1").innerHTML = inputUser;
  }

  // INIZIO PRIMA FUNZIONE


  pcNumberSum(inputUser);   
  
  ParDisp();

}


 function pcNumberSum(inputUser) {
    let pcNumber = Math.floor(Math.random() * 5) + 1;

    document.getElementById("pcNumber1").innerHTML = pcNumber;

    let somma = pcNumber + inputUser;

    console.log(somma);

    return somma

   }  
   
function ParDisp(somma) {

      if (somma % 2 == 0) {
        console.log("numero pari");
      } else {
        console.log("numero dispari");
      }
   }