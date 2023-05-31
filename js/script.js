// MAIL
//- Inventiamo una lista di email a nostro piacimento
//- Chiediamo all'utente una mail (con un prompt)
//- controlliamo che la mail inserita sia presente nella lista
//- se è presente, gli diamo il benvenuto. (in console)
//- altrimenti gli diciamo che non può accedere (in console)

// ---- > Avviso:non potete usare il metodo .includes ())!!!

const recElement = document.getElementById('mail-dadi');

const getEmail = ['riccardo.laurenti95@gmail.com', 'laurachisci@gmail.com', 'maurilaurenti@yahoo.it'];
console.table(getEmail);

const userEmail = prompt('Inserisci qui la tua email');
console.log(userEmail);

let isSave = false;

for ( let i = 0; i < getEmail.length; i++ ) {
    if (userEmail === getEmail[i]) {
        console.log('BENVENUTO !',`Email riconosciuta`);
        isSave = true;
    }
}


if (isSave) {
    console.log(userEmail);
} else {
    console.log('Email errata, non puoi accedere');
}