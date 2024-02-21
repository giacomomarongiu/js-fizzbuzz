console.log("Ciao, il tuo js è ben collegato");


// BONUS 1 - Inizializzo due variabili per gli elementi del DOM
const main = document.createElement('main');
const container = document.createElement('div');
const row = document.createElement('div');
const col = document.createElement('div');
const my_title = document.createElement('h1');

// BONUS 1 - Aggiungo gli elementi al DOM 
document.body.append(main);
main.append(my_title);
main.append(container);
container.append(row);

// BONUS 1 - Assegno la classe container
// Bonus 2 - Aseegno diverse classi agli elementi per ottenere stile
container.classList.add('container');
row.classList.add('row', 'g-3');
my_title.classList.add('text-danger', 'fw-bold', 'py-3');
//BONUS 2 - Scrivo il titolo attraverso una stringa
my_title.innerHTML = `BENVENUTO SU FIZZBUZZ`;


//- Creo un ciclo for che mi permetta di re-iterare il mio codice per 100 volte

for (let i = 1; i <= 100; i++) {
    // console.log(i); //- Verifico che lo faccia attraverso il console.log
    // BONUS 1 - Ogni volta che il ciclo si ripete aggiungo un div
    const my_div = document.createElement('div');
    // BONUS  2 - Attribuisco al div appena creato la classe col di bootstrap
    my_div.classList.add('col-3', 'col-md-2');
    //- Faccio si che stampi il valore che desidero attraverso l'operatore %
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log("FizzBuzz"); //- Verifico che lo faccia attraverso il console.log
        //Aggiungo la mia card alla colonna (Volevo cambiare metedo mettendo il div in stringa)
        my_div.innerHTML = `<div class='card fbzz my_wh bg-danger text-warning border-5'>
        <span class="">FizzBuzz</span></div> `; // 

    } else if ((i % 3) == 0) {
        console.log("Fizz"); //- Verifico che lo faccia attraverso il console.log
        //Aggiungo la mia card alla colonna (Volevo cambiare metedo mettendo il div in stringa)
        my_div.innerHTML = `<div class='card fzz my_wh bg-warning text-success border-5'> Fizz </div>`;

    } else if ((i % 5) == 0) {
        console.log("Buzz"); //- Verifico che lo faccia attraverso il console.log
        //Aggiungo la mia card alla colonna (Volevo cambiare metedo mettendo il div in stringa)
        my_div.innerHTML = `<div class='card bzz my_wh bg-success text-danger border-5'> Buzz </div>`;

    } else {
        console.log(i); //- Verifico che lo faccia attraverso il console.log
        //Aggiungo la mia card alla colonna (Volevo cambiare metedo mettendo il div in stringa)
        my_div.innerHTML = `<div class='card number my_wh bg-danger-subtle border-5 text-danger'> ${i} </div>`;
    }

    row.append(my_div) // Aggiungo una nuova colonna alla row

}
