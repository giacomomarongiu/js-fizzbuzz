console.log("Ciao, il tuo js è ben collegato");


// BONUS 1 - Inizializzo due variabili per gli elementi del DOM
const main = document.createElement('main');
const container = document.createElement ('div');

// BONUS 1 - Aggiungo gli elementi al DOM 
document.body.append(main);
main.append(container);
// BONUS 1 - Assegno la classe container
container.classList.add('container');

//- Creo un ciclo for che mi permetta di re-iterare il mio codice per 100 volte

for (let i = 1; i <= 100; i++) {
    //    console.log(i); //- Verifico che lo faccia attraverso il console.log
    // BONUS 1 - Ogni volta che il ciclo si ripete aggiungo uno span
        const my_div = document.createElement('div')
        my_div.classList.add('square')
    //- Faccio si che stampi attraverso l'operatore %
    if ((i % 3) == 0 && (i % 5) == 0) {
        console.log("FizzBuzz"); //- Verifico che lo faccia attraverso il console.log
        my_div.innerHTML = `<span class='fbzz'>FizzBuzz</span> `;
        
    } else if ((i % 3) == 0) {
        console.log("Fizz"); //- Verifico che lo faccia attraverso il console.log
        my_div.innerHTML = `<span class='fzz'> Fizz </span>`;

    } else if ((i % 5) == 0) {
        console.log("Buzz"); //- Verifico che lo faccia attraverso il console.log
        my_div.innerHTML = `<span class='bzz'> Buzz </span>`;

    } else {
        console.log(i); //- Verifico che lo faccia attraverso il console.log
        my_div.innerHTML = `<span class='number my_square'> ${i} </span>`;
    }

    container.append(my_div)

}
