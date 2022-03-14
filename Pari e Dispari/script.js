
//////ESERCIZIO 2

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

const sceltaUtente =prompt("Scegli pari o dispari");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
const numeroComputer= nRandom(1,5);
let controllo =pariODispari (numeroComputer, numeroUtente);


function nRandom(min,max){
    const nRandom =Math.floor(Math.random()*max)+min;
    return nRandom;
}

function pariODispari (numeroComputer, numeroUtente){
    let somma= numeroUtente + numeroComputer;
    console.log( "Tu hai inserito il numero " + numeroUtente, " ed il computer ha inserito il numero " + numeroComputer);
    console.log("La somma è " + somma);
    if(somma % 2 !== 0){
        return 'dipari';
    }else {
        return 'pari';
    }
}

if (controllo == sceltaUtente){
    console.log("Hai vinto");
}else{
    console.log("Hai perso");
}