// Gioco dei dadi

// - Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// - Stabilire il vincitore, in base a chi fa il punteggio più alto.
// - Stampare (in console)


let nutUser = Math.floor(Math.random() * 6) + 1;

console.log(`Il tiro dell'utente è : ${nutUser}`);

let computerNut = Math.floor(Math.random() * 6) + 1;

console.log(`Il tiro del Computer è : ${computerNut}`);


if (nutUser > computerNut) {
    console.log("Ha vinto l'utente !!");
} else if (computerNut > nutUser) {
    console.log('Ha vinto il Computer !!!');
} else if (nutUser === computerNut) {
    console.log('Avete Pareggiato..');
}