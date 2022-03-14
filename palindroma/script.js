
/////ESERCIZIO 1
/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


let parola = prompt("inserisci una parola");

let parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    console.log('la parola è palindroma');
  }else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  
  return strInversa;
}
 console.log (parolaInversa);
 console.log(parola)