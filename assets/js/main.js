console.log("Ciao, il tuo js è ben collegato");


// BONUS 1 - Inizializzo due variabili per gli elementi del DOM
const main = document.createElement('main');
const container = document.createElement ('div');
const row = document.createElement ('div');
const col = document.createElement ('div');
const my_title = document.createElement ('h1');

// BONUS 1 - Aggiungo gli elementi al DOM 
document.body.append(main);
main.append(my_title);
main.append(container);
container.append(row);

// BONUS 1 - Assegno la classe container
container.classList.add('container');
row.classList.add('row');
row.classList.add('g-3');
my_title.classList.add('text-warning');
my_title.innerHTML = `BENVENUTO SU FIZZBUZZ`;


//- Creo un ciclo for che mi permetta di re-iterare il mio codice per 100 volte

for (let i = 1; i <= 100; i++) {
    //    console.log(i); //- Verifico che lo faccia attraverso il console.log
    // BONUS 1 - Ogni volta che il ciclo si ripete aggiungo uno span
        const my_div = document.createElement('div')
        my_div.classList.add('col-2')
    //- Faccio si che stampi attraverso l'operatore %
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log("FizzBuzz"); //- Verifico che lo faccia attraverso il console.log
        my_div.innerHTML = `<div class='card fbzz my_wh bg-danger text-warning border-5'>Fizz Buzz</div> `;
        
    } else if ((i % 3) == 0) {
        console.log("Fizz"); //- Verifico che lo faccia attraverso il console.log
        my_div.innerHTML = `<div class='card fzz my_wh bg-warning text-success border-5'> Fizz </div>`;

    } else if ((i % 5) == 0) {
        console.log("Buzz"); //- Verifico che lo faccia attraverso il console.log
        my_div.innerHTML = `<div class='card bzz my_wh bg-success text-danger border-5'> Buzz </div>`;

    } else {
        console.log(i); //- Verifico che lo faccia attraverso il console.log
        my_div.innerHTML = `<div class='card number my_wh bg-danger-subtle border-5 text-danger'> ${i} </div>`;
    }

    row.append(my_div)

}
