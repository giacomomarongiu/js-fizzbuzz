console.log("Ciao, il tuo js è ben collegato");


//- Creo un ciclo for che mi permetta di re-iterare il mio codice per 100 volte

for (let i=1; i<=100; i++){
//    console.log(i); //- Verifico che lo faccia attraverso il console.log

//- Faccio si che per i multipli di 3 stampi "Fizz" attraverso l'operatore %
    if ((i % 3) == 0 && (i % 5) == 0){ 
        console.log("FizzBuzz"); //- Verifico che lo faccia attraverso il console.log
    } else if ((i % 3) == 0) {
        console.log("Fizz");
    } else if ((i % 5) == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }

}
