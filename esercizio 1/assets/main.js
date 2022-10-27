function myFunction(word1) {
  let parola = prompt("inserisci una parola");

  let wordsReverse = "";
  let wordsRight = "";

  for (let i = parola.length - 1; i >= 0; i--) {
    wordsReverse += parola[i];
    
  }
  //console.log(`${wordsReverse}`);
  for (let x = 0; x < parola.length; x++) {
    wordsRight += parola[x];
  }
  //console.log(`${wordsRight}`);

  if(wordsReverse == wordsRight){
     document.getElementById("result").innerText = ("Questa parola è palindroma king")
  }else{
    document.getElementById("result").innerText = ("Mi dispiace boss, è solo una parola normale...")
  }
}

myFunction("parola");
